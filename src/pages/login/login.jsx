import "./login.css";
import {Grid, TextField, Button, Paper } from "@material-ui/core";
import { useContext,useRef } from "react";
import {AuthContext } from "../../context/AuthContext"
import {loginCall } from "../../apiCalls"
import { CircularProgress } from "@material-ui/core";

export default function Login() {
const email = useRef();
const password = useRef();

const {user, isFetching, error, dispatch} = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({email:email.current.value, password:password.current.value}, dispatch );
  }
  console.log(user);

  return (
    <>
  <Grid container
  className="loginscree"
direction="column"
justifyContent="center"
alignItems="center">
  <Grid item className="titile" >
   <h1>Social Media </h1>
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
      <Grid item className="loginform" xs={4} >
      <Paper elevation={4}>
      <form className="loginBox" onSubmit={handleClick}>
            <h3>Log in</h3>
           <input id="outlined-basic" label="Email" type="email" variant="outlined" required ref={email}  />
            <input id="outlined-basic" type="password" label="Password" variant="outlined" ref={password} required />
            <Button variant="contained" className="loginButton" type="submit">{ isFetching ? <CircularProgress /> : "Log In"}</Button> 
            <span className="loginForgot" >Forgot Password?</span>
             <Button className="loginRegisterButton">
             { isFetching ? <CircularProgress /> : "Create a New Account"}
              </Button>
        </form>
        </Paper>
      </Grid>
    </Grid>
</Grid>
    </>
  );
}