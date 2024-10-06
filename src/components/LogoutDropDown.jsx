import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
  Button,
} from "@material-tailwind/react";
import userIcon from "../assets/usericon.png";
import { useNavigate } from "react-router-dom";
import { ID, account } from "../lib/appwrite";
import { useAuth } from "../Context/AuthContext";

export function LogoutDropDown() {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      account.deleteSession("current");
      setIsLoggedIn(false);
      navigate("/signin");
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };
  return (
    <Menu>
      <MenuHandler>
        <img src={userIcon} alt="" className="w-8 rounded-md" />
      </MenuHandler>
      <MenuList className="bg-[#00000096] min-w-0 p-2 border-none">
        <Button color="red" variant="gradient" size="sm" onClick={handleLogout}>
          Log Out
        </Button>
      </MenuList>
    </Menu>
  );
}
