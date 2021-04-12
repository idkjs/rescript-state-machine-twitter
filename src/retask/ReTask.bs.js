

import * as Cmd from "./cmd.bs.js";
import * as Sub from "./sub.bs.js";
import * as Util from "./util.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";

function useReducerT(config) {
  var sub = config.sub;
  var update = config.update;
  var cancel = React.useRef([
        {},
        [],
        0
      ]);
  var match = React.useReducer((function (param, action) {
          return Curry._2(update, param[0], action);
        }), config.init);
  var res = match[0];
  var cmd = res[1];
  var state = res[0];
  var dispatch = match[1];
  React.useEffect((function () {
          Cmd.setReg(function (task) {
                var id = String(cancel.current[2]);
                cancel.current[2] = cancel.current[2] + 1 | 0;
                var dispatch$1 = function (action) {
                  dispatch(action);
                  return Util.Dict.$$delete(cancel.current[0], id);
                };
                var cb = Curry._1(task, dispatch$1);
                cancel.current[0][id] = cb;
                
              });
          cmd();
          
        }), [res]);
  React.useEffect((function () {
          var count = {
            contents: 0
          };
          var queue = cancel.current[1];
          Sub.setReg(function (inst) {
                var id = count.contents;
                count.contents = count.contents + 1 | 0;
                var dispatch$1 = function (payload) {
                  var msg = Curry._1(queue[id][2], payload);
                  return dispatch(msg);
                };
                var old = Belt_Array.get(queue, id);
                if (old !== undefined) {
                  if (Sub.sameSub(inst.kind, inst.param, old[0], old[3])) {
                    old[2] = inst.tagger;
                    return ;
                  }
                  old[1]();
                  var match = Curry._1(inst.task, dispatch$1);
                  queue[id] = [
                    inst.kind,
                    match,
                    inst.tagger,
                    inst.param
                  ];
                  return ;
                }
                var match$1 = Curry._1(inst.task, dispatch$1);
                queue[id] = [
                  inst.kind,
                  match$1,
                  inst.tagger,
                  inst.param
                ];
                
              });
          Curry._1(sub, state)();
          var count$1 = count.contents;
          while(queue.length > count$1) {
            queue.pop()[1]();
          };
          
        }), [
        sub,
        state
      ]);
  React.useEffect((function () {
          return (function (param) {
                    Object.values(cancel.current[0]).forEach(function (f) {
                          return f();
                        });
                    cancel.current[1].forEach(function (f) {
                          return f[1]();
                        });
                    
                  });
        }), []);
  return [
          state,
          dispatch
        ];
}

function make(param) {
  var match = useReducerT({
        init: param.init,
        update: param.update,
        sub: param.sub
      });
  return Curry._2(param.view, match[0], match[1]);
}

export {
  useReducerT ,
  make ,
  
}
/* react Not a pure module */
