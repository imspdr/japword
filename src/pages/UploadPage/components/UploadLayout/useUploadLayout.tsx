import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addWord, useWords } from '@/hooks/useWords';
import { useToast, useModal, Typography, Button } from "@imspdr/ui";
import { useQueryClient } from "@tanstack/react-query";
import { bind, unbind } from 'wanakana';
import { useAuth, checkIsAdmin, loginWithGoogle } from "@/hooks/useAuth";

export const useUploadLayout = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { openModal, closeModal } = useModal();
  const queryClient = useQueryClient();
  const { data: words } = useWords();
  const user = useAuth();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const jpInputRef = useRef<HTMLInputElement>(null);
  const charInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    jp: "",
    ko: "",
    char: "",
    description: "",
  });

  useEffect(() => {
    if (jpInputRef.current) {
      bind(jpInputRef.current);
    }
    return () => {
      if (jpInputRef.current) unbind(jpInputRef.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCompositionEnd = (e: React.CompositionEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.jp || !formData.ko) {
      showToast("일본어 단어와 뜻은 필수 입력 항목입니다.");
      return;
    }

    // Auth check
    if (!user) {
      openAdminModal();
      return;
    }

    const isAdmin = await checkIsAdmin(user.uid);
    if (!isAdmin) {
      openAdminModal(true);
      return;
    }

    const normalizedInput = formData.jp.replace(/\s+/g, '');
    const isDuplicate = words?.some((word) => {
      const normalizedWord = word.jp.replace(/\s+/g, '');
      return normalizedWord === normalizedInput;
    });

    if (isDuplicate) {
      showToast("이미 등록된 단어입니다.");
      return;
    }

    setIsSubmitting(true);
    try {
      await addWord({
        ...formData,
        creator: user.email || user.uid,
      });
      await queryClient.invalidateQueries({ queryKey: ['words'] });
      showToast("단어가 성공적으로 등록되었습니다.");
      navigate("/list");
    } catch (error) {
      console.error(error);
      showToast("단어 등록에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openAdminModal = (isNotAdmin = false) => {
    openModal(
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Typography variant="body" level={1}>
          {isNotAdmin
            ? "현재 계정은 관리자 권한이 없습니다. 관리자 계정으로 로그인해주세요."
            : "단어 등록은 관리자만 가능합니다. 로그인이 필요합니다."}
        </Typography>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <Button variant="outlined" onClick={closeModal}>취소</Button>
          <Button variant="contained" onClick={async () => {
            await loginWithGoogle();
            closeModal();
            showToast("로그인되었습니다. 다시 등록하기를 눌러주세요.");
          }}>
            로그인
          </Button>
        </div>
      </div>,
      { title: "관리자 권한 필요" }
    );
  };

  return {
    formData,
    isSubmitting,
    jpInputRef,
    charInputRef,
    handleChange,
    handleCompositionEnd,
    handleBlur,
    handleSubmit
  };
};


