

import * as Sub from "./sub.bs.js";
import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as Listener from "./listener.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

var record = new Map();

var token = Sub.getToken("domEvent.res");

function onUniqueTarget($$event, tagger, element, name) {
  var token$1 = token + name;
  var r = record.get(element);
  var record$1;
  if (r !== undefined) {
    record$1 = Caml_option.valFromOption(r);
  } else {
    var r$1 = {};
    record.set(element, r$1);
    record$1 = r$1;
  }
  return function () {
    var task = function (send) {
      var listener = Js_dict.get(record$1, $$event);
      var listener$1;
      if (listener !== undefined) {
        listener$1 = listener;
      } else {
        var listener$2 = Listener.make((function () {
                var inst = function (ev) {
                  var match = record$1[$$event];
                  match[0].forEach(function (c) {
                        return c(ev);
                      });
                  
                };
                element.addEventListener($$event, inst);
                return inst;
              }), (function (inst) {
                element.removeEventListener($$event, inst);
                
              }));
        record$1[$$event] = listener$2;
        listener$1 = listener$2;
      }
      Listener.start(listener$1, send);
      return function () {
        return Listener.stop(listener$1, send);
      };
    };
    return Sub.register({
                kind: token$1,
                param: $$event,
                task: task,
                tagger: tagger
              });
  };
}

function onDocument($$event, tagger) {
  return onUniqueTarget($$event, tagger, document, "document");
}

function onWindow($$event, tagger) {
  return onUniqueTarget($$event, tagger, window, "window");
}

function onElement($$event, tagger, query) {
  var ele = document.querySelector(query);
  if (!(ele == null)) {
    return onUniqueTarget($$event, tagger, ele, query);
  }
  throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
}

export {
  onDocument ,
  onWindow ,
  onElement ,
  
}
/* record Not a pure module */
