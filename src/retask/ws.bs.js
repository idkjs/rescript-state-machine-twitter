

import * as Cmd from "./cmd.bs.js";
import * as Sub from "./sub.bs.js";
import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as Listener from "./listener.bs.js";

var record = new Map();

var token = Sub.getToken("ws.res");

function on(ws, tagger) {
  return function () {
    var task = function (send) {
      var listener = record.get(ws);
      var listener$1;
      if (listener !== undefined) {
        listener$1 = listener;
      } else {
        var listener$2 = Listener.make((function () {
                var inst = function (msg) {
                  var match = record.get(ws);
                  match[0].forEach(function (c) {
                        return c(msg);
                      });
                  
                };
                ws.addEventListener("message", inst);
                return inst;
              }), (function (inst) {
                ws.removeEventListener("message", inst);
                
              }));
        record.set(ws, listener$2);
        listener$1 = listener$2;
      }
      Listener.start(listener$1, send);
      return function () {
        return Listener.stop(listener$1, send);
      };
    };
    return Sub.register({
                kind: token,
                param: ws,
                task: task,
                tagger: tagger
              });
  };
}

function send(ws, msg) {
  return function () {
    return ws.send(msg);
  };
}

var recordU = {};

var tokenU = token + "U";

function makeListener(url) {
  var listener = Js_dict.get(recordU, url);
  if (listener !== undefined) {
    return listener;
  }
  var listener$1 = Listener.make((function () {
          var inst = new WebSocket(url);
          inst.onmessage = (function (msg) {
              var match = recordU[url];
              match[0].forEach(function (c) {
                    return c(msg);
                  });
              
            });
          return inst;
        }), (function (inst) {
          return inst.close();
        }));
  recordU[url] = listener$1;
  return listener$1;
}

function onUrl(url, tagger) {
  return function () {
    var task = function (send) {
      var listener = makeListener(url);
      Listener.start(listener, send);
      return function () {
        return Listener.stop(listener, send);
      };
    };
    return Sub.register({
                kind: tokenU,
                param: url,
                task: task,
                tagger: tagger
              });
  };
}

function sendUrl(url, msg) {
  return function () {
    var listener = makeListener(url);
    var nothing = function (param) {
      
    };
    if (listener[1] === undefined) {
      Listener.start(listener, nothing);
    }
    return Cmd.register(function (param) {
                var ws = listener[1];
                ws.send(msg);
                return function () {
                  return Listener.stop(listener, nothing);
                };
              });
  };
}

export {
  on ,
  send ,
  makeListener ,
  onUrl ,
  sendUrl ,
  
}
/* record Not a pure module */
