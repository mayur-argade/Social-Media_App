import {Grid, Button, TextField, Paper } from "@material-ui/core";
import "./register.css";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();


const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

return (
<>
<Grid container
direction="column"
justifyContent="center"
alignItems="center">
  <Grid item className="titile" >
   <h1>Social Media</h1>
  </Grid>
  <Grid item className="description">
    <h2>Connect with your friends</h2>
  </Grid>
    <Grid container className="mainscreen" 
     direction="row"
     justifyContent="center"
     alignItems="center">
      <Grid item className="img" xs={6}>
    <img src="/assests/Hi.gif" alt="" className="hi"/>
      </Grid>
      <Grid item className="loginform" xs={4}>
      <Paper elevation={4}>
      <form className="loginBox">
              <h3>Sign Up</h3>
              <input ref={username} required placeholder="Username"  className="loginInput" />
              <input ref={email} required placeholder="Email" type="email" className="loginInput" />
              <input ref={password} required placeholder="Password" type="password" className="loginInput" />
              <input ref={password} required placeholder="Password Again" type="password" className="loginInput" />
              <Button variant="contained" className="loginButton" type="submit" >Sign Up</Button>
              <Button variant="contained" className="loginRegisterButton">Log into Account</Button>
            </form>
        </Paper>
      </Grid>
    </Grid>

</Grid>
    </>
  );
}
