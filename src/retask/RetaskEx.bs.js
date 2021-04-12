

import * as Cmd from "./cmd.bs.js";
import * as Time from "./time.bs.js";
import * as React from "react";
import * as ReTask from "./ReTask.bs.js";
import * as DomEvent from "./domEvent.bs.js";

function RetaskEx(Props) {
  var match = ReTask.useReducerT({
        init: [
          0,
          Time.delay(1000, (function (param) {
                  return 1;
                }))
        ],
        update: (function (state, action) {
            return [
                    state + action | 0,
                    Cmd.none
                  ];
          }),
        sub: (function (state) {
            return DomEvent.onDocument("click", (function (ev) {
                          return state;
                        }));
          })
      });
  return React.createElement("div", undefined, String(match[0]));
}

var make = RetaskEx;

export {
  make ,
  
}
/* Time Not a pure module */
