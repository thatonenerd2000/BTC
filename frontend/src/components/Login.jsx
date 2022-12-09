//componenets
import Logo from "../components/Logo";

const Login = (props) => {
  return (
    <div style={{ display: props.show === true ? "block" : "none" }}>
      <Logo size="40px" />
      <br />
      <h1 style={{ textDecoration: "underline" }}>Log In</h1>
      <div id="loginContainer">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Log In</button>
        {props.children}
      </div>
    </div>
  );
};

export default Login;
