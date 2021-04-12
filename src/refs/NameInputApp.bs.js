

import * as React from "react";
import * as NameInput from "./NameInput.bs.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

function NameInputApp(Props) {
  var myRef = React.useRef(null);
  return React.createElement("div", undefined, React.createElement(NameInput.make, {
                  className: "fancy",
                  children: React.createElement("button", {
                        onClick: (function (param) {
                            return Belt_Option.forEach(Caml_option.nullable_to_opt(myRef.current), (function (myRef) {
                                          myRef.focus();
                                          
                                        }));
                          })
                      }, "Click here to focus Input"),
                  ref: myRef
                }));
}

var make = NameInputApp;

export {
  make ,
  
}
/* react Not a pure module */
