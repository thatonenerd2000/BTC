import React from "react";
import { useState, useContext } from "react";

//componenets
import Logo from "../components/Logo";
import axios from "axios";

//Global Context
import { ConfigContext } from "../GlobalContext";

//images
import addImage from "../assets/images/add.png";

//Router
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const Globalconfig = useContext(ConfigContext);
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [imgSrc, setImgSrc] = React.useState(addImage);
  const [image, setImageBinary] = React.useState(addImage);

  const SignUp = () => {
    axios
      .post(`${Globalconfig.host}/signup`, {
        companyName: companyName,
        companyEmail: companyEmail,
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        image: image,
      })
      .then((res) => {
        if (res.data.message === "Account Created") {
          Globalconfig.SetComanpanyName(res.data.companyName);
          Globalconfig.SetComanpanyEmail(res.data.companyEmail);
          Globalconfig.setUsername(res.data.username);
          Globalconfig.setImage(res.data.image);
          navigate("/dashboard");
        }
      });
  };

  return (
    <div style={{ display: props.show === true ? "block" : "none" }}>
      <Logo size="40px" />
      <br />
      <h1 style={{ textDecoration: "underline" }}>Sign Up</h1>
      <div id="loginContainer">
        <img
          style={{ width: "200px" }}
          src={imgSrc}
          alt="add"
          id="add_listing_image"
          onClick={() => {
            document.getElementById("add_listing_image_input").click();
          }}
        />
        <br />
        <input
          type="file"
          id="add_listing_image_input"
          hidden
          onChange={(e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
              setImageBinary(reader.result);
            };
            setImgSrc(URL.createObjectURL(file));
          }}
        />
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

        <input type="text" placeholder="Company Address" />
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
        <button
          onClick={(e) => {
            SignUp();
          }}
        >
          Sign Up
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default Signup;
