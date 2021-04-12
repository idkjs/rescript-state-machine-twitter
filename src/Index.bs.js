

import * as App from "./App.bs.js";
import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as ReactDomExperimental from "./bindings/ReactDomExperimental.bs.js";

var root = ReactDomExperimental.createRootWithId("root");

if (root !== undefined) {
  Caml_option.valFromOption(root).render(React.createElement(React.StrictMode, {
            children: React.createElement(App.make, {})
          }));
}

export {
  
}
/* root Not a pure module */
