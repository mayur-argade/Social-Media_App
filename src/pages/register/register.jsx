import { Button, TextField } from "@material-ui/core";
import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
      <div className="logintop">
          <h3 className="loginLogo">Vrukshvalli</h3>
          <span className="loginDesc">
            Every Tree Matters
          </span>
          </div>
        <div className="loginLeft">
          <img src="" alt="" />
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <TextField placeholder="Username" className="loginInput" />
            <TextField placeholder="Email" className="loginInput" />
            <TextField placeholder="Password" className="loginInput" />
            <TextField placeholder="Password Again" className="loginInput" />
            <Button className="loginButton">Sign Up</Button>
            <Button className="loginRegisterButton">
              Log into Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}