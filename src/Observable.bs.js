

import * as Curry from "bs-platform/lib/es6/curry.js";

function createSubject(initial) {
  var value = {
    contents: initial
  };
  var nextId = {
    contents: 0
  };
  var listeners = [];
  return {
          listen: (function (listener) {
              var id = nextId.contents;
              nextId.contents = id + 1 | 0;
              listeners.push({
                    id: id,
                    listener: listener
                  });
              listener(value.contents);
              return function (param) {
                var index = listeners.reduce((function (foundIndex, listener, index) {
                        if (listener.id === id) {
                          return index;
                        } else {
                          return foundIndex;
                        }
                      }), -1);
                if (index >= 0) {
                  listeners.splice(index);
                  return ;
                }
                
              };
            }),
          get: (function (param) {
              return value.contents;
            }),
          set: (function (v) {
              value.contents = v;
              listeners.forEach(function (param) {
                    return param.listener(v);
                  });
              
            })
        };
}

var sub = createSubject(1);

var v = Curry._1(sub.get, undefined);

console.log(v);

export {
  createSubject ,
  sub ,
  v ,
  
}
/* sub Not a pure module */
