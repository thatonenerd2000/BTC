import { useState, useContext } from "react";
import axios from "axios";

//componenets
import Logo from "../components/Logo";

//Global Context
import { ConfigContext } from "../GlobalContext";

//Router
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const Globalconfig = useContext(ConfigContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const verifyLogin = (username, password) => {
    axios
      .post(`${Globalconfig.host}/verifyLogin`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        username: username,
        plainPassword: password,
      })
      .then((res) => {
        if (res.data.message === "Login Successful") {
          Globalconfig.SetComanpanyName(res.data.companyName);
          Globalconfig.SetComanpanyEmail(res.data.companyEmail);
          Globalconfig.setUsername(res.data.username);
          navigate("/dashboard");
        }
      });
  };

  return (
    <div style={{ display: props.show === true ? "block" : "none" }}>
      <Logo size="40px" />
      <br />
      <h1 style={{ textDecoration: "underline" }}>Log In</h1>
      <div id="loginContainer">
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
        <button
          onClick={(e) => {
            verifyLogin(username, password);
          }}
        >
          Log In
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default Login;
