

import * as Css from "bs-css-emotion/src/Css.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

var button = Curry._1(Css.style, {
      hd: Css.backgroundColor(Css.hex("FDFEC3c0")),
      tl: {
        hd: Css.borderWidth(Css.zero),
        tl: {
          hd: Css.color(Css.hex("6c564b")),
          tl: {
            hd: Css.fontSize(Css.px(14)),
            tl: {
              hd: Css.fontWeight({
                    NAME: "num",
                    VAL: 500
                  }),
              tl: {
                hd: Css.padding2(Css.px(6), Css.px(12)),
                tl: {
                  hd: Css.borderRadius(Css.px(2)),
                  tl: {
                    hd: Css.textTransform(Css.uppercase),
                    tl: {
                      hd: Css.transition(200, undefined, undefined, "background-color"),
                      tl: {
                        hd: Css.cursor(Css.pointer),
                        tl: {
                          hd: Css.hover({
                                hd: Css.backgroundColor(Css.hex("FDFEC3")),
                                tl: /* [] */0
                              }),
                          tl: /* [] */0
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

var Styles = {
  button: button
};

function ButtonComponent(Props) {
  var onClick = Props.onClick;
  var onMouseEnter = Props.onMouseEnter;
  var onMouseLeave = Props.onMouseLeave;
  var domRef = Props.domRef;
  var className = Props.className;
  var children = Props.children;
  console.log("CLASSNAME: ", className);
  var tmp = {
    className: Curry._1(Css.merge, {
          hd: button,
          tl: /* [] */0
        })
  };
  if (domRef !== undefined) {
    tmp.ref = Caml_option.valFromOption(domRef);
  }
  if (onClick !== undefined) {
    tmp.onClick = Caml_option.valFromOption(onClick);
  }
  if (onMouseEnter !== undefined) {
    tmp.onMouseEnter = Caml_option.valFromOption(onMouseEnter);
  }
  if (onMouseLeave !== undefined) {
    tmp.onMouseLeave = Caml_option.valFromOption(onMouseLeave);
  }
  return React.createElement("button", tmp, children);
}

var make = ButtonComponent;

export {
  Styles ,
  make ,
  
}
/* button Not a pure module */
