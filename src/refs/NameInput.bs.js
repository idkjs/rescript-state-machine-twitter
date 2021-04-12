

import * as React from "react";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

var make = React.forwardRef(function (Props, ref_) {
      var className = Props.className;
      var children = Props.children;
      var tmp = {
        type: "text"
      };
      var tmp$1 = Belt_Option.map((ref_ == null) ? undefined : Caml_option.some(ref_), (function (prim) {
              return prim;
            }));
      if (tmp$1 !== undefined) {
        tmp.ref = Caml_option.valFromOption(tmp$1);
      }
      if (className !== undefined) {
        tmp.className = Caml_option.valFromOption(className);
      }
      return React.createElement("div", undefined, React.createElement("input", tmp), children);
    });

export {
  make ,
  
}
/* make Not a pure module */
