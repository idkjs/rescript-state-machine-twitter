

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

function HoverOverMe(Props) {
  var match = React.useState(function () {
        return false;
      });
  var setHover = match[1];
  return React.createElement("div", {
              className: "App"
            }, React.createElement("button", {
                  onMouseEnter: (function (param) {
                      return Curry._1(setHover, (function (param) {
                                    return true;
                                  }));
                    }),
                  onMouseLeave: (function (param) {
                      return Curry._1(setHover, (function (param) {
                                    return false;
                                  }));
                    })
                }, "Hover over me!"), match[0] ? React.createElement("p", undefined, "Hi!") : null);
}

var make = HoverOverMe;

export {
  make ,
  
}
/* react Not a pure module */
