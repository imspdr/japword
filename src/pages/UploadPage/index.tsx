import { useEffect, useState } from "react";
import { loginWithGoogle, useAuth, checkIsAdmin } from "@/hooks/useAuth";
import UploadLayout from "@/components/UploadLayout";

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
    return <p>상태 확인 중...</p>;
  }

  // 로그인 유도
  if (status === "need-login") {
    return (
      <div>
        <h2>관리자 로그인 필요</h2>
        <p>단어 업로드는 관리자만 가능합니다.</p>
        <button onClick={loginWithGoogle}>Google 로그인</button>
      </div>
    );
  }

  // 관리자 확인 중
  if (status === "checking-admin") {
    return <p>관리자 권한 확인 중...</p>;
  }

  // 관리자 아님
  if (status === "not-admin") {
    return (
      <div>
        <h2>권한 없음</h2>
        <p>관리자 계정으로 로그인해 주세요.</p>
      </div>
    );
  }

  // 관리자 OK
  return <UploadLayout />;
}
