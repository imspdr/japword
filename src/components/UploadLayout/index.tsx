import { FC, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addWord } from "../../hooks/useWords";
import { useToast } from "@imspdr/ui";
import { bind, unbind } from 'wanakana';
import {
  Container,
  Form,
  Input,
  InputGroup,
  Label,
  SubmitButton,
  TextArea,
  Title,
  ButtonText,
} from "./styled";

const UploadLayout: FC = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
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
    if (charInputRef.current) {
      bind(charInputRef.current);
    }
    return () => {
      if (jpInputRef.current) unbind(jpInputRef.current);
      if (charInputRef.current) unbind(charInputRef.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.jp || !formData.ko) {
      showToast("일본어 단어와 뜻은 필수 입력 항목입니다.");
      return;
    }

    setIsSubmitting(true);
    try {
      await addWord({
        ...formData,
        creator: "system",
        createdAt: new Date().toISOString(),
      });
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
            일본어 단어 (필수)
          </Label>
          <Input
            ref={jpInputRef}
            name="jp"
            value={formData.jp}
            onChange={handleChange}
            placeholder="예: 猫"
            autoComplete="off"
          />
        </InputGroup>

        <InputGroup>
          <Label variant="body" level={2}>
            읽는 법 (히라가나/가타카나)
          </Label>
          <Input
            ref={charInputRef}
            name="char"
            value={formData.char}
            onChange={handleChange}
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

        <InputGroup>
          <Label variant="body" level={2}>
            설명/예문
          </Label>
          <TextArea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="상세 설명이나 예문을 입력하세요."
          />
        </InputGroup>

        <SubmitButton type="submit" disabled={isSubmitting}>
          <ButtonText variant="body" level={1}>
            {isSubmitting ? "등록 중..." : "등록하기"}
          </ButtonText>
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default UploadLayout;
