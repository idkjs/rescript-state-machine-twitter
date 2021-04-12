

import * as Cmd from "./cmd.bs.js";
import * as Sub from "./sub.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";

function delay(delay$1, tagger) {
  return function () {
    return Cmd.register(function (send) {
                var id = setTimeout((function (param) {
                        return send(Curry._1(tagger, undefined));
                      }), delay$1);
                return function () {
                  clearTimeout(id);
                  
                };
              });
  };
}

function sleep(time) {
  return function (cb) {
    var id = setTimeout((function (param) {
            return cb({
                        TAG: /* Ok */0,
                        _0: undefined
                      });
          }), time);
    return function () {
      clearTimeout(id);
      
    };
  };
}

function nextFrame(tagger) {
  return function () {
    return Cmd.register(function (send) {
                var id = requestAnimationFrame(function (time) {
                      return send(Curry._1(tagger, time));
                    });
                return function () {
                  cancelAnimationFrame(id);
                  
                };
              });
  };
}

var token = Sub.getToken("time.res");

function every(interval, tagger) {
  return function () {
    var task = function (send) {
      var id = setInterval((function (param) {
              return send(undefined);
            }), interval);
      return function () {
        clearInterval(id);
        
      };
    };
    return Sub.register({
                kind: token,
                param: interval,
                task: task,
                tagger: tagger
              });
  };
}

export {
  delay ,
  sleep ,
  nextFrame ,
  token ,
  every ,
  
}
/* token Not a pure module */
