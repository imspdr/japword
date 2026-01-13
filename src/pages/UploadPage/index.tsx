import { useEffect, useState } from "react";
import { loginWithGoogle, useAuth, checkIsAdmin } from "@/hooks/useAuth";
import UploadLayout from "@/components/UploadLayout";
import { PageContainer, MessageCard, Title, Description, StyledButton } from "./styled";
import { Typography } from "@imspdr/ui";

type Status = "checking" | "need-login" | "checking-admin" | "not-admin" | "allowed";

export default function UploadGate() {
  const user = useAuth();
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    if (user === undefined) {
      setStatus("checking");
      return;
    }

    if (user === null) {
      setStatus("need-login");
      return;
    }

    setStatus("checking-admin");
    checkIsAdmin(user.uid).then((isAdmin) => {
      setStatus(isAdmin ? "allowed" : "not-admin");
    });
  }, [user]);

  // 인증 상태 확인 중
  if (status === "checking") {
    return (
      <PageContainer>
        <MessageCard>
          <Title variant="title" level={3}>
            상태 확인 중...
          </Title>
        </MessageCard>
      </PageContainer>
    );
  }

  // 로그인 유도
  if (status === "need-login") {
    return (
      <PageContainer>
        <MessageCard>
          <Title variant="title" level={2}>
            관리자 로그인 필요
          </Title>
          <Description variant="body" level={1}>
            단어 업로드는 관리자만 가능합니다.
          </Description>
          <StyledButton onClick={loginWithGoogle}>
            <Typography variant="body" level={1}>
              Google 로그인
            </Typography>
          </StyledButton>
        </MessageCard>
      </PageContainer>
    );
  }

  // 관리자 확인 중
  if (status === "checking-admin") {
    return (
      <PageContainer>
        <MessageCard>
          <Title variant="title" level={3}>
            관리자 권한 확인 중...
          </Title>
        </MessageCard>
      </PageContainer>
    );
  }

  // 관리자 아님
  if (status === "not-admin") {
    return (
      <PageContainer>
        <MessageCard>
          <Title variant="title" level={2}>
            권한 없음
          </Title>
          <Description variant="body" level={1}>
            관리자 계정으로 로그인해 주세요.
          </Description>
        </MessageCard>
      </PageContainer>
    );
  }

  // 관리자 OK
  return <UploadLayout />;
}
