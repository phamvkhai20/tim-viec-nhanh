import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import CommonRouter from "../Router/CommonRouter/";
import "../../assets/vendor/nucleo/css/nucleo.css";
import "../../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import Home from "../Page/Home/Loadable";
function App() {
  return (
    <div className="App">
      <Switch>
        <CommonRouter exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
