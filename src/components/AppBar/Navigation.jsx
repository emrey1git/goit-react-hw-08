import { NavLink } from "react-router-dom";

const activeStyle = {
  fontWeight: "bold",
  color: "blue",
  textDecoration: "underline",
};

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>
      {" | "}
      <NavLink
        to="/contacts"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
