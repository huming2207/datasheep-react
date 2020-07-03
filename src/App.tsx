import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";

function App(): JSX.Element {
  return (
    <div className="App">
      <Switch>
        <Route path="/about"></Route>

        {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
        <Route path="/contact/:id"></Route>
        <Route path="/contact"></Route>

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
