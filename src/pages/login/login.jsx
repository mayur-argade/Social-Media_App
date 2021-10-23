import "./login.css";
import { TextField, Button } from "@material-ui/core";

export default function Login() {
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
          <img src="/assests/" alt="" />
        </div>
        <div className="loginRight">
          <div className="loginBox">
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
           <Button className="loginButton">Login</Button> 
           <span className="loginForgot">Forgot Password?</span>
            <Button className="loginRegisterButton">
              Create a New Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}