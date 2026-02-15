import { useNavigate } from "react-router-dom";
import { useAuth, logout } from "./useAuth";

export const useAppLayout = () => {
  const navigate = useNavigate();
  const user = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return {
    user,
    handleLogout,
    handleHomeClick
  };
};
