import {Grid, Button, TextField, Paper } from "@material-ui/core";
import "./register.css";

export default function Register() {
  return (
<>
<Grid container
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
              <h3>Sign Up</h3>
              <TextField id="outlined-basic" label="Username" variant="outlined" className="loginInput" />
              <TextField id="outlined-basic" label="Email" variant="outlined" className="loginInput" />
              <TextField id="outlined-basic" label="Password" variant="outlined" className="loginInput" />
              <TextField id="outlined-basic" label="Password Again" variant="outlined" className="loginInput" />
              <Button variant="contained" className="loginButton">Sign Up</Button>
              <Button variant="contained" className="loginRegisterButton">Log into Account</Button>
            </div>
        </Paper>
      </Grid>
    </Grid>

</Grid>
    </>
  );
}
