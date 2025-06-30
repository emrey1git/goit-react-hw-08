import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const loadingStyle = {
  textAlign: "center",
  marginTop: "50px",
  fontSize: "18px",
  padding: "20px",
  color: "#333",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  maxWidth: "400px",
  marginLeft: "auto",
  marginRight: "auto",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      const timer = setTimeout(() => {
        setRedirect(true);
      }, 2000); // 2 saniye sonra yönlendirme
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return children;
  }

  if (redirect) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div style={loadingStyle}>
      Giriş yapmanız gerekiyor. <br />
      <strong>Giriş sayfasına yönlendiriliyorsunuz...</strong>
    </div>
  );
};

export default PrivateRoute;
