import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Dashboard from "./components/pages/Dashboard";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#68b36b",
      main: "#43a047",
      dark: "#2e7031",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffac33",
      main: "#ff9800",
      dark: "#b26a00",
      contrastText: "#000",
    },
  },
});

function App(): JSX.Element {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/about"></Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
