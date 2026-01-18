import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@imspdr/ui";
import { ButtonGroup } from "./styled";

const ListActions: FC = () => {
  const navigate = useNavigate();

  return (
    <ButtonGroup>
      <Button onClick={() => navigate("/quiz")}>
        <Typography variant="body" level={1}>
          퀴즈 풀기
        </Typography>
      </Button>
      <Button onClick={() => navigate("/upload")}>
        <Typography variant="body" level={1}>
          단어 등록
        </Typography>
      </Button>
    </ButtonGroup>
  );
};

export default ListActions;
