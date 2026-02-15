import { useState, useEffect } from "react";
import { loginWithGoogle, useAuth, checkIsAdmin } from "@/hooks/useAuth";

export type UploadPageStatus = "checking" | "need-login" | "checking-admin" | "not-admin" | "allowed";

export const useUploadPage = () => {
  const user = useAuth();
  const [status, setStatus] = useState<UploadPageStatus>("checking");

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

  return {
    status,
    loginWithGoogle
  };
};
