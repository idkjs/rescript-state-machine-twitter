

import * as ReactDom from "react-dom";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

function createRootWithId(id) {
  var element = document.getElementById(id);
  if (!(element == null)) {
    return Caml_option.some(ReactDom.unstable_createRoot(element));
  }
  
}

function createBlockingRootWithId(id) {
  var element = document.getElementById(id);
  if (!(element == null)) {
    return Caml_option.some(ReactDom.unstable_createBlockingRoot(element));
  }
  
}

export {
  createRootWithId ,
  createBlockingRootWithId ,
  
}
/* react-dom Not a pure module */
