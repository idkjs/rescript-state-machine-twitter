

import * as Cmd from "./cmd.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Pervasives from "bs-platform/lib/es6/pervasives.js";

function perform(tagger, task) {
  return Cmd.register(function (send) {
              var cb = function (payload) {
                if (payload.TAG === /* Ok */0) {
                  return send(Curry._1(tagger, payload._0));
                } else {
                  return Pervasives.failwith("ERROR: Task perfom should never receive error");
                }
              };
              return task(cb);
            });
}

function attempt(tagger, task) {
  return Cmd.register(function (send) {
              var cb = function (payload) {
                return send(Curry._1(tagger, payload));
              };
              return task(cb);
            });
}

function andThen(mapper, task) {
  return function (cb) {
    var cancelRef = {
      contents: 0
    };
    var prepared = function (payload) {
      if (payload.TAG !== /* Ok */0) {
        return cb({
                    TAG: /* Error */1,
                    _0: payload._0
                  });
      }
      var match = Curry._1(mapper, payload._0)(cb);
      cancelRef.contents = match;
      
    };
    cancelRef.contents = task(prepared);
    return function () {
      return cancelRef.contents();
    };
  };
}

function map(mapper, task) {
  return function (cb) {
    var cb$1 = function (payload) {
      var tmp;
      tmp = payload.TAG === /* Ok */0 ? ({
            TAG: /* Ok */0,
            _0: Curry._1(mapper, payload._0)
          }) : ({
            TAG: /* Error */1,
            _0: payload._0
          });
      return cb(tmp);
    };
    return task(cb$1);
  };
}

function map2(mapper, task1, task2) {
  return function (cb) {
    var cancelRef = {
      contents: 0
    };
    var prepared = function (payload) {
      if (payload.TAG !== /* Ok */0) {
        return cb({
                    TAG: /* Error */1,
                    _0: payload._0
                  });
      }
      var a = payload._0;
      var cb$1 = function (payload) {
        if (payload.TAG === /* Ok */0) {
          return cb({
                      TAG: /* Ok */0,
                      _0: Curry._2(mapper, a, payload._0)
                    });
        } else {
          return cb({
                      TAG: /* Error */1,
                      _0: payload._0
                    });
        }
      };
      var match = task2(cb$1);
      cancelRef.contents = match;
      
    };
    cancelRef.contents = task1(prepared);
    return function () {
      return cancelRef.contents();
    };
  };
}

export {
  perform ,
  attempt ,
  andThen ,
  map ,
  map2 ,
  
}
/* No side effect */
