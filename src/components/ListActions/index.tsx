import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Typography, useModal } from "@imspdr/ui";
import { ActionButton, ButtonGroup, ModalCancelButton, ModalConfirmButton } from "./styled";

const ListActions: FC = () => {
  const navigate = useNavigate();

  return (
    <ButtonGroup>
      <ActionButton onClick={() => navigate("/quiz")}>
        <Typography variant="body" level={1}>
          퀴즈 풀기
        </Typography>
      </ActionButton>
      <ActionButton onClick={() => navigate("/upload")}>
        <Typography variant="body" level={1}>
          단어 등록
        </Typography>
      </ActionButton>
    </ButtonGroup>
  );
};

export default ListActions;
