

import * as Caml_exceptions from "bs-platform/lib/es6/caml_exceptions.js";
import * as Webapi__Dom__Event from "bs-webapi/src/Webapi/Dom/Webapi__Dom__Event.bs.js";

var include = Webapi__Dom__Event.Impl({});

var $$MessageEvent = include;

var include$1 = Webapi__Dom__Event.Impl({});

function code(ev) {
  var n = ev.code;
  if (n > 1015 || n < 1000) {
    return /* CustomCode */{
            _0: n,
            _1: ev
          };
  } else {
    return n - 1000 | 0;
  }
}

var CloseEvent_eventPhase = include$1.eventPhase;

var $$CloseEvent = {
  eventPhase: CloseEvent_eventPhase,
  code: code
};

var UnknownReadyState = /* @__PURE__ */Caml_exceptions.create("WebSocket.UnknownReadyState");

export {
  $$MessageEvent ,
  $$CloseEvent ,
  UnknownReadyState ,
  
}
/* include Not a pure module */
