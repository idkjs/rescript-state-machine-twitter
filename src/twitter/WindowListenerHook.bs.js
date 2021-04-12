

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

function make(addEventListener, removeEventListener) {
  var makeListener = function (listener) {
    Curry._2(addEventListener, listener, window);
    return (function (param) {
              return Curry._2(removeEventListener, listener, window);
            });
  };
  var use0 = function (listener) {
    React.useEffect((function () {
            return makeListener(listener);
          }), []);
    
  };
  var use1 = function (listener) {
    return function (param) {
      React.useEffect((function () {
              return makeListener(listener);
            }), param);
      
    };
  };
  var use2 = function (listener) {
    return function (param) {
      React.useEffect((function () {
              return makeListener(listener);
            }), param);
      
    };
  };
  var use3 = function (listener) {
    return function (param) {
      React.useEffect((function () {
              return makeListener(listener);
            }), param);
      
    };
  };
  var use4 = function (listener) {
    return function (param) {
      React.useEffect((function () {
              return makeListener(listener);
            }), param);
      
    };
  };
  return {
          use0: use0,
          use1: use1,
          use2: use2,
          use3: use3,
          use4: use4
        };
}

var KeyUp = make((function (prim, prim$1) {
        prim$1.addEventListener("keyup", prim);
        
      }), (function (prim, prim$1) {
        prim$1.removeEventListener("keyup", prim);
        
      }));

var Click = make((function (prim, prim$1) {
        prim$1.addEventListener("click", prim);
        
      }), (function (prim, prim$1) {
        prim$1.removeEventListener("click", prim);
        
      }));

var MouseDown = make((function (prim, prim$1) {
        prim$1.addEventListener("mousedown", prim);
        
      }), (function (prim, prim$1) {
        prim$1.removeEventListener("mousedown", prim);
        
      }));

var MouseMove = make((function (prim, prim$1) {
        prim$1.addEventListener("mousemove", prim);
        
      }), (function (prim, prim$1) {
        prim$1.removeEventListener("mousemove", prim);
        
      }));

var TouchStart = make((function (prim, prim$1) {
        prim$1.addEventListener("touchstart", prim);
        
      }), (function (prim, prim$1) {
        prim$1.removeEventListener("touchstart", prim);
        
      }));

var include = make((function (listener, $$window) {
        $$window.addEventListener("resize", listener);
        
      }), (function (listener, $$window) {
        $$window.removeEventListener("resize", listener);
        
      }));

var Resize = include;

var include$1 = make((function (listener, $$window) {
        $$window.addEventListener("scroll", listener);
        
      }), (function (listener, $$window) {
        $$window.removeEventListener("scroll", listener);
        
      }));

var Scroll = include$1;

var include$2 = make((function (listener, $$window) {
        $$window.addEventListener("beforeunload", listener);
        
      }), (function (listener, $$window) {
        $$window.removeEventListener("beforeunload", listener);
        
      }));

var BeforeUnload = include$2;

export {
  make ,
  KeyUp ,
  Click ,
  MouseDown ,
  MouseMove ,
  TouchStart ,
  Resize ,
  Scroll ,
  BeforeUnload ,
  
}
/* KeyUp Not a pure module */
