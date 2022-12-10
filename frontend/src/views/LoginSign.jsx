import { useState } from "react";

//componenets
import Login from "../components/Login";
import Signup from "../components/Signup";

const LoginSign = (props) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <div id="loginSign">
        <Login show={showLogin}>
          <button
            onClick={(e) => {
              setShowLogin(false);
              setShowSignUp(true);
            }}
            id="showSignUpButton"
          >
            Create Account
          </button>
        </Login>
        <Signup show={showSignUp}>
          <button
            onClick={(e) => {
              setShowLogin(true);
              setShowSignUp(false);
            }}
            id="showSignUpButton"
          >
            Back to Login
          </button>
        </Signup>
      </div>
    </>
  );
};

export default LoginSign;
