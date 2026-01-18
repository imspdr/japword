import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@imspdr/ui";
import { ButtonGroup } from "./styled";

const ListActions: FC = () => {
  const navigate = useNavigate();

  return (
    <ButtonGroup>
      <Button onClick={() => navigate("/quiz")}>퀴즈 풀기</Button>
      <Button onClick={() => navigate("/upload")}>단어 등록</Button>
    </ButtonGroup>
  );
};

export default ListActions;
