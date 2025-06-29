import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <p>Hello, {userName}</p>
      <button type="button" onClick={handleLogout} style={{ cursor: "pointer" }}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
