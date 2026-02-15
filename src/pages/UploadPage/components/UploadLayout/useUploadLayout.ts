import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addWord, useWords } from '@/hooks/useWords';
import { useToast } from "@imspdr/ui";
import { useQueryClient } from "@tanstack/react-query";
import { bind, unbind } from 'wanakana';

export const useUploadLayout = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const queryClient = useQueryClient();
  const { data: words } = useWords();
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
        creator: "system",
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
