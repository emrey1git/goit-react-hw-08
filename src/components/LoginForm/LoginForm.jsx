import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  maxWidth: "320px",
  margin: "30px auto",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  backgroundColor: "white",
};

const labelStyle = {
  fontWeight: "600",
  marginBottom: "5px",
};

const inputStyle = {
  padding: "8px 12px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "10px 15px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#007bff",
  color: "white",
  fontWeight: "600",
  cursor: "pointer",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(login(values));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={formStyle}>
      <label htmlFor="email" style={labelStyle}>
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        required
        style={inputStyle}
      />

      <label htmlFor="password" style={labelStyle}>
        Password
      </label>
      <input
        id="password"
        type="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        required
        style={inputStyle}
      />

      <button type="submit" style={buttonStyle}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
