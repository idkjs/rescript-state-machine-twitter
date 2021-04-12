

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

function handleMouseOut(domElement, e, fn) {
  var targetElement = e.target;
  if (!domElement.contains(targetElement)) {
    return Curry._1(fn, e);
  }
  
}

function useMouseOut(onMouseOut) {
  var elementRef = React.useRef(null);
  var handleMouseMove = function (e) {
    Belt_Option.map(Caml_option.nullable_to_opt(elementRef.current), (function (refValue) {
            return handleMouseOut(refValue, e, onMouseOut);
          }));
    
  };
  React.useEffect((function () {
          document.addEventListener("mousedown", handleMouseMove);
          return (function (param) {
                    document.removeEventListener("mousedown", handleMouseMove);
                    
                  });
        }), []);
  return elementRef;
}

export {
  handleMouseOut ,
  useMouseOut ,
  
}
/* react Not a pure module */
