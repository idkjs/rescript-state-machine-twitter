

import * as Css from "bs-css-emotion/src/Css.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";

function buttonColors(t) {
  if (t >= 3) {
    return {
            background: "white",
            backgroundHovered: "cec8c8",
            color: "908a8a",
            colorHovered: "423636"
          };
  } else {
    return {
            background: "eadede",
            backgroundHovered: "f9c8c8",
            color: "a08181",
            colorHovered: "671919"
          };
  }
}

function getStyle(variant) {
  var colors = buttonColors(variant);
  return Curry._1(Css.style, {
              hd: Css.color({
                    NAME: "hex",
                    VAL: colors.color
                  }),
              tl: {
                hd: Css.borderRadius({
                      NAME: "px",
                      VAL: 2
                    }),
                tl: {
                  hd: Css.padding2({
                        NAME: "px",
                        VAL: 1
                      }, {
                        NAME: "px",
                        VAL: 4
                      }),
                  tl: {
                    hd: Css.cursor("pointer"),
                    tl: {
                      hd: Css.$$float("left"),
                      tl: {
                        hd: Css.backgroundColor(Css.hex(colors.background)),
                        tl: {
                          hd: Css.selector(":hover", {
                                hd: Css.backgroundColor(Css.hex(colors.backgroundHovered)),
                                tl: {
                                  hd: Css.color({
                                        NAME: "hex",
                                        VAL: colors.colorHovered
                                      }),
                                  tl: /* [] */0
                                }
                              }),
                          tl: /* [] */0
                        }
                      }
                    }
                  }
                }
              }
            });
}

export {
  buttonColors ,
  getStyle ,
  
}
/* Css Not a pure module */
