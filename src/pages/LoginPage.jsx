import LoginForm from "../components/LoginForm/LoginForm";

const containerStyle = {
  maxWidth: "400px",
  margin: "60px auto",
  padding: "30px",
  backgroundColor: "#f0f0f0",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

const LoginPage = () => {
  return (
    <div style={containerStyle}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
