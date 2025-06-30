import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../../redux/auth/selectors";
import { logout } from "../../../redux/auth/operations";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
<div className={styles.userMenu}>
    <p className={styles.greeting}>Hello, {userName}</p>
    <button
      type="button"
      onClick={handleLogout}
      className={styles.logoutButton}
    >
      Logout
    </button>
  </div>
  );
};

export default UserMenu;
