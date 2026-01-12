import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { addWord } from "../../hooks/useWords";
import { useToast, Typography } from "@imspdr/ui";
import { Container, Form, Input, InputGroup, Label, SubmitButton, TextArea, Title, ButtonText } from "./styled";

const UploadPage: FC = () => {
  const navigate = useNavigate();
  const { user, isAllowed } = useAuth();
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    jp: "",
    ko: "",
    char: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !isAllowed) {
      showToast("로그인 및 관리자 권한이 필요합니다.");
      return;
    }

    if (!formData.jp || !formData.ko) {
      showToast("일본어 단어와 뜻은 필수 입력 항목입니다.");
      return;
    }

    setIsSubmitting(true);
    try {
      await addWord({
        ...formData,
        creator: user.uid,
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

  if (!user || !isAllowed) {
    // Ideally this page shouldn't be accessible without login, but valid as fallback
    return (
      <Container>
        <Typography variant="body" level={1}>
          접근 권한이 없습니다. (관리자 승인 필요)
        </Typography>
      </Container>
    );
  }

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
          <SubmitButton type="submit" disabled={isSubmitting}>
            <ButtonText variant="body" level={1}>
              {isSubmitting ? "등록 중..." : "등록하기"}
            </ButtonText>
          </SubmitButton>
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default UploadPage;
