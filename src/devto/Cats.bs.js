

import * as Css from "bs-css-emotion/src/Css.bs.js";
import * as $$Array from "bs-platform/lib/es6/array.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";

var Json = {};

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
                hd: Css.display("inlineBlock"),
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
      }
    });

var cat = Curry._1(Css.style, {
      hd: Css.backgroundColor(Css.hex("FDFEC3c0")),
      tl: {
        hd: Css.borderWidth(Css.zero),
        tl: {
          hd: Css.color(Css.hex("6c564b")),
          tl: {
            hd: Css.fontSize(Css.px(14)),
            tl: {
              hd: Css.width(Css.px(200)),
              tl: {
                hd: Css.height(Css.px(200)),
                tl: {
                  hd: Css.margin(Css.px(8)),
                  tl: {
                    hd: Css.display("inlineBlock"),
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
          }
        }
      }
    });

var Styles = {
  button: button,
  cat: cat
};

var cats = [
  {
    name: "Mr. Whiskers",
    color: "black"
  },
  {
    name: "Sassy",
    color: "white"
  },
  {
    name: "Smokey",
    color: "gray"
  }
];

function Cats(Props) {
  return React.createElement("div", {
              className: Curry._1(Css.merge, {
                    hd: button,
                    tl: /* [] */0
                  })
            }, "Cats", $$Array.mapi((function (i, cat$1) {
                    return React.createElement("div", {
                                key: String(i),
                                className: Curry._1(Css.merge, {
                                      hd: cat,
                                      tl: /* [] */0
                                    }),
                                data: Belt_Option.getWithDefault(JSON.stringify(cat$1), "No Cat"),
                                onMouseOver: (function (e) {
                                    var eventTarget = e.target;
                                    console.log("eventTarget: ", eventTarget);
                                    console.log("eventTarget: ", eventTarget.data);
                                    var dataset = e.target.dataset;
                                    console.log("dataset: ", dataset);
                                    console.log("eJson+DATASET: ", e.target.dataset);
                                    console.log("eJson: ", e.target.dataset.info);
                                    console.log("event: ", e);
                                    
                                  })
                              }, cat$1.name);
                  }), cats));
}

var make = Cats;

export {
  Json ,
  Styles ,
  cats ,
  make ,
  
}
/* button Not a pure module */
