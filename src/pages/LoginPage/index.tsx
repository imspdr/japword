import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useToast } from "@imspdr/ui";
import { Container, GoogleButton, Title } from "./styled";

const LoginPage = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/sample");
      showToast("로그인되었습니다!");
    } catch (error) {
      showToast("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Container>
      <Title variant="title" level={1}>
        로그인
      </Title>
      <GoogleButton onClick={handleGoogleLogin}>Google 계정으로 로그인</GoogleButton>
    </Container>
  );
};

export default LoginPage;
