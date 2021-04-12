

import * as Css from "bs-css-emotion/src/Css.bs.js";

function orangeAlpha(a) {
  return {
          NAME: "rgba",
          VAL: [
            255,
            96,
            59,
            a
          ]
        };
}

function digitalBlackA(a) {
  return {
          NAME: "rgba",
          VAL: [
            45,
            45,
            45,
            a
          ]
        };
}

function amberAlpha(a) {
  return {
          NAME: "rgba",
          VAL: [
            242,
            149,
            68,
            a
          ]
        };
}

var Colors_orange = {
  NAME: "hex",
  VAL: "ff603b"
};

var Colors_mint = {
  NAME: "hex",
  VAL: "9fe4c9"
};

var Colors_greyScale = {
  NAME: "hex",
  VAL: "757575"
};

var Colors_gray = {
  NAME: "hex",
  VAL: "d9d9d9"
};

var Colors_digitalBlack = {
  NAME: "hex",
  VAL: "2d2d2d"
};

var Colors_purple = {
  NAME: "hex",
  VAL: "5362C8"
};

var Colors_digitalGray = {
  NAME: "hex",
  VAL: "575757"
};

var Colors_error = {
  NAME: "hex",
  VAL: "e93939"
};

var Colors_status = {
  NAME: "hex",
  VAL: "ffb13b"
};

var Colors_codeHighlight = {
  NAME: "hex",
  VAL: "e9eaf3"
};

var Colors_operational = {
  NAME: "hex",
  VAL: "9FE4C9"
};

var Colors_amber = {
  NAME: "rgb",
  VAL: [
    242,
    149,
    68
  ]
};

var Colors = {
  orange: Colors_orange,
  orangeAlpha: orangeAlpha,
  mint: Colors_mint,
  greyScale: Colors_greyScale,
  gray: Colors_gray,
  white: Css.white,
  black: Css.black,
  digitalBlack: Colors_digitalBlack,
  digitalBlackA: digitalBlackA,
  purple: Colors_purple,
  digitalGray: Colors_digitalGray,
  error: Colors_error,
  status: Colors_status,
  codeHighlight: Colors_codeHighlight,
  operational: Colors_operational,
  amber: Colors_amber,
  amberAlpha: amberAlpha
};

export {
  Colors ,
  
}
/* Css Not a pure module */
