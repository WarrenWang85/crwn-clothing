import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  const Hatspage = () => <h1>Hats Page</h1>;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
