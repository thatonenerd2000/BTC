import { useEffect, useState } from "react";

//componenets
import Logo from "../components/Logo";
import axios from "axios";

//Global Context
import GlobalContext from "../GlobalConfig";

const Signup = (props) => {
  const Globalconfig = useContext(ConfigContext);

  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const SignUp = () => {
    axios.post(`${Globalconfig.host}/signup`, {});
  };

  useEffect(() => {}, []);
  return (
    <div style={{ display: props.show === true ? "block" : "none" }}>
      <Logo size="40px" />
      <br />
      <h1 style={{ textDecoration: "underline" }}>Sign Up</h1>
      <div id="loginContainer">
        <input
          type="text"
          placeholder="Company Name"
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Company Email"
          onChange={(e) => {
            setCompanyEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <button>Sign Up</button>
        {props.children}
      </div>
    </div>
  );
};

export default Signup;
