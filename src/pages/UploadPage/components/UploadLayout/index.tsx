import { FC } from "react";
import { Button } from "@imspdr/ui";
import {
  Container,
  Form,
  Input,
  InputGroup,
  Label,
  Title,
} from "./styled";
import KanjiInput from "../KanjiInput";
import { useUploadLayout } from "./useUploadLayout";

const UploadLayout: FC = () => {
  const {
    formData,
    isSubmitting,
    jpInputRef,
    charInputRef,
    handleChange,
    handleCompositionEnd,
    handleBlur,
    handleSubmit
  } = useUploadLayout();

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
            placeholder="예: ね코"
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
