import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={styles.authNav}>
      <NavLink
        to="/login"
        className={({ isActive }) => isActive ? styles.active : styles.link}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => isActive ? styles.active : styles.link}
      >
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
