

import * as React from "react";
import * as TwitterButtonVerbose from "./twitter/TwitterButtonVerbose.bs.js";

import './App.css';
;

function App(Props) {
  return React.createElement("div", {
              className: "App"
            }, React.createElement("div", undefined, "Twitter Button State"), React.createElement(TwitterButtonVerbose.make, {}));
}

var make = App;

export {
  make ,
  
}
/*  Not a pure module */
