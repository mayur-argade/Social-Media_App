import Home from "./pages/home/home"
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Profile from "./pages/profile/Profile";
import {createTheme, ThemeProvider } from "@material-ui/core"

const theme = createTheme({
  palette:{
    primary:{
      main:'#03B898'
      
    },
    secondary:{
      main: '#04cfc9'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Profile />
    </div>
    </ThemeProvider>
  );
}

export default App;
