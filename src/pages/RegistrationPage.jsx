import { GiApc } from "react-icons/gi";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { PiX } from "react-icons/pi";

const containerStyle = {
  maxWidth: "400px",
  margin: "60px auto",
  padding: "30px",
  backgroundColor: "#f0f0f0",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  
};

const RegistrationPage = () => {
  return (
    <div style={containerStyle}>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
