import "./login.css";
import {Grid, TextField, Button, Paper } from "@material-ui/core";

export default function Login() {
  return (
    <>
  <Grid container
  className="loginscree"
direction="column"
justifyContent="center"
alignItems="center">
  <Grid item className="titile" >
   <h1>Vrukshavalli</h1>
  </Grid>
  <Grid item className="description">
    <h2>Every tree matters</h2>
  </Grid>
    <Grid container className="mainscreen" 
     direction="row"
     justifyContent="center"
     alignItems="center">
      <Grid item className="img" xs={6}>
    <img src="/assests/register.jfif" alt="" className="hi"/>
      </Grid>
      <Grid item className="loginform" xs={4}>
      <Paper elevation={4}>
      <div className="loginBox">
            <h3>Log in</h3>
           <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <Button variant="contained" className="loginButton">Login</Button> 
            <span className="loginForgot">Forgot Password?</span>
             <Button className="loginRegisterButton">
               Create a New Account
              </Button>
        </div>
        </Paper>
      </Grid>
    </Grid>
</Grid>
    </>
  );
}