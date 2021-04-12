

import * as React from "react";
import * as FancyInput from "./FancyInput.bs.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

function FancyApp(Props) {
  var input = React.useRef(null);
  var onClick = function (param) {
    return Belt_Option.forEach(Caml_option.nullable_to_opt(input.current), (function (input) {
                  input.focus();
                  
                }));
  };
  return React.createElement("div", undefined, React.createElement(FancyInput.make, {
                  className: "fancy",
                  children: React.createElement("button", {
                        onClick: onClick
                      }, "Click to focus"),
                  ref: input
                }));
}

var make = FancyApp;

export {
  make ,
  
}
/* react Not a pure module */
