import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import Navigation from "../navigation/Navigation";
import AuthNav from "../authNav/AuthNav";
import UserMenu from "../userMenu/UserMenu";
import styles from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
     <header className={styles.header}>
    <Navigation />
    {isLoggedIn ? <UserMenu /> : <AuthNav />}
  </header>
  );
};

export default AppBar;
