import { useNavigate, useLocation } from "react-router-dom";
import { useAuth, logout } from "./useAuth";

export const useAppLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const isListPage = pathname === "/list" || pathname === "/";

  return {
    user,
    handleLogout,
    handleHomeClick,
    isListPage
  };
};
