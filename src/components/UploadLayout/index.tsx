import { FC, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addWord, useWords } from "../../hooks/useWords";
import { useToast, Button } from "@imspdr/ui";
import { useQueryClient } from "@tanstack/react-query";
import { bind, unbind } from 'wanakana';
import {
  Container,
  Form,
  Input,
  InputGroup,
  Label,
  TextArea,
  Title,
} from "./styled";
import KanjiInput from "../KanjiInput";

const UploadLayout: FC = () => {
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
    // jp is now for Reading (Kana), so we bind Wanakana to it
    if (jpInputRef.current) {
      bind(jpInputRef.current);
    }
    // char is for Kanji, so NO binding
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

    // Duplicate Check
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
      // Invalidate the words query to trigger a refetch
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

  return (
    <Container>
      <Title variant="title" level={1}>
        단어 등록
      </Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label variant="body" level={2}>
            일본어 특수 표기 (한자/가타카나)
          </Label>
          <KanjiInput
            ref={charInputRef}
            name="char"
            value={formData.char}
            onChange={handleChange}
            placeholder="예: 猫"
            autoComplete="off"
          />
        </InputGroup>

        <InputGroup>
          <Label variant="body" level={2}>
            읽는 법 - 히라가나 (필수)
          </Label>
          <Input
            ref={jpInputRef}
            name="jp"
            value={formData.jp}
            onChange={handleChange}
            onCompositionEnd={handleCompositionEnd}
            onBlur={handleBlur}
            placeholder="예: ねこ"
            autoComplete="off"
          />
        </InputGroup>

        <InputGroup>
          <Label variant="body" level={2}>
            한국어 뜻 (필수)
          </Label>
          <Input
            name="ko"
            value={formData.ko}
            onChange={handleChange}
            placeholder="예: 고양이"
            autoComplete="off"
          />
        </InputGroup>
        <Button
          type="submit"
          disabled={isSubmitting}
          fullWidth
          variant="contained"
          color="primary.1"
          size="lg"
        >
          {isSubmitting ? "등록 중..." : "등록하기"}
        </Button>
      </Form>
    </Container>
  );
};

export default UploadLayout;
