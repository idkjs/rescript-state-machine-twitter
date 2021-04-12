

import * as Css from "bs-css-emotion/src/Css.bs.js";

function removeHex(param) {
  return param.slice(1);
}

function r(c) {
  return {
          NAME: "hex",
          VAL: c.slice(1)
        };
}

function toS(col) {
  return col.VAL;
}

var white_1 = "#FFFFFF".slice(1);

var white = {
  NAME: "hex",
  VAL: white_1
};

var purple_1 = "#800080".slice(1);

var purple = {
  NAME: "hex",
  VAL: purple_1
};

var black_1 = "#000000".slice(1);

var black = {
  NAME: "hex",
  VAL: black_1
};

var greyO4_1 = "#00000044".slice(1);

var greyO4 = {
  NAME: "hex",
  VAL: greyO4_1
};

var whiteO2_1 = "#ffffff20".slice(1);

var whiteO2 = {
  NAME: "hex",
  VAL: whiteO2_1
};

var whiteO4_1 = "#ffffff40".slice(1);

var whiteO4 = {
  NAME: "hex",
  VAL: whiteO4_1
};

var whiteOc_1 = "#ffffffc0".slice(1);

var whiteOc = {
  NAME: "hex",
  VAL: whiteOc_1
};

var clear_1 = "#00000000".slice(1);

var clear = {
  NAME: "hex",
  VAL: clear_1
};

var textDarker_1 = "#333333".slice(1);

var textDarker = {
  NAME: "hex",
  VAL: textDarker_1
};

var textDark_1 = "#5f6d7d".slice(1);

var textDark = {
  NAME: "hex",
  VAL: textDark_1
};

var textMedium_1 = "#9a9ea7".slice(1);

var textMedium = {
  NAME: "hex",
  VAL: textMedium_1
};

var smokeWhite_1 = "#F0F1F3".slice(1);

var smokeWhite = {
  NAME: "hex",
  VAL: smokeWhite_1
};

var buttonHover_1 = "#e4ecf5".slice(1);

var buttonHover = {
  NAME: "hex",
  VAL: buttonHover_1
};

var lightGrayBackground_1 = "#f4f6f9".slice(1);

var lightGrayBackground = {
  NAME: "hex",
  VAL: lightGrayBackground_1
};

var lighterGrayBackground_1 = "#fbfcfd".slice(1);

var lighterGrayBackground = {
  NAME: "hex",
  VAL: lighterGrayBackground_1
};

var grayBackground_1 = "#dcdee0".slice(1);

var grayBackground = {
  NAME: "hex",
  VAL: grayBackground_1
};

var greydisabled_1 = "#e3e4e6".slice(1);

var greydisabled = {
  NAME: "hex",
  VAL: greydisabled_1
};

var accentBlue_1 = "#8C9EB5".slice(1);

var accentBlue = {
  NAME: "hex",
  VAL: accentBlue_1
};

var accentBlueO8_1 = "#8C9EB540".slice(1);

var accentBlueO8 = {
  NAME: "hex",
  VAL: accentBlueO8_1
};

var accentBlue1a_1 = "#8c9eb530".slice(1);

var accentBlue1a = {
  NAME: "hex",
  VAL: accentBlue1a_1
};

var mainBlue_1 = "#347296".slice(1);

var mainBlue = {
  NAME: "hex",
  VAL: mainBlue_1
};

var link_1 = "#4a72b7".slice(1);

var link = {
  NAME: "hex",
  VAL: link_1
};

var linkHover_1 = "#375ea1".slice(1);

var linkHover = {
  NAME: "hex",
  VAL: linkHover_1
};

var linkAccent_1 = "#437bff".slice(1);

var linkAccent = {
  NAME: "hex",
  VAL: linkAccent_1
};

var darkLink_1 = "#1a2e45".slice(1);

var darkLink = {
  NAME: "hex",
  VAL: darkLink_1
};

var darkAccentBlue_1 = "#5C6E95".slice(1);

var darkAccentBlue = {
  NAME: "hex",
  VAL: darkAccentBlue_1
};

var grey1_1 = "#868686".slice(1);

var grey1 = {
  NAME: "hex",
  VAL: grey1_1
};

var border_1 = "#D5D7DA".slice(1);

var border = {
  NAME: "hex",
  VAL: border_1
};

var light = Css.fontWeight({
      NAME: "num",
      VAL: 300
    });

var regular = Css.fontWeight({
      NAME: "num",
      VAL: 400
    });

var heavy = Css.fontWeight({
      NAME: "num",
      VAL: 700
    });

var veryHeavy = Css.fontWeight({
      NAME: "num",
      VAL: 900
    });

var FontWeights = {
  light: light,
  regular: regular,
  heavy: heavy,
  veryHeavy: veryHeavy
};

var Transitions = {
  standardLength: 100
};

var BorderRadius_medium = {
  NAME: "px",
  VAL: 4
};

var BorderRadius_tight = {
  NAME: "px",
  VAL: 2
};

var BorderRadius = {
  medium: BorderRadius_medium,
  tight: BorderRadius_tight
};

var green_1 = "#81a952".slice(1);

var green = {
  NAME: "hex",
  VAL: green_1
};

var yellow_1 = "#C09C66".slice(1);

var yellow = {
  NAME: "hex",
  VAL: yellow_1
};

var Statuses = {
  green: green,
  yellow: yellow,
  resolved: accentBlue
};

function color(t) {
  if (t === "error") {
    return {
            NAME: "hex",
            VAL: "#721c24".slice(1)
          };
  } else if (t === "primary") {
    return {
            NAME: "hex",
            VAL: "#004085".slice(1)
          };
  } else if (t === "warning") {
    return {
            NAME: "hex",
            VAL: "#856404".slice(1)
          };
  } else if (t === "success") {
    return {
            NAME: "hex",
            VAL: "#155724".slice(1)
          };
  } else {
    return {
            NAME: "hex",
            VAL: "#0c5460".slice(1)
          };
  }
}

function background(t) {
  if (t === "error") {
    return {
            NAME: "hex",
            VAL: "#f8d7da".slice(1)
          };
  } else if (t === "primary") {
    return {
            NAME: "hex",
            VAL: "#cce5ff".slice(1)
          };
  } else if (t === "warning") {
    return {
            NAME: "hex",
            VAL: "#fff3cd".slice(1)
          };
  } else if (t === "success") {
    return {
            NAME: "hex",
            VAL: "#d4edda".slice(1)
          };
  } else {
    return {
            NAME: "hex",
            VAL: "#d1ecf1".slice(1)
          };
  }
}

var Alert = {
  color: color,
  background: background
};

var p_1 = "#3c3c3c".slice(1);

var p = {
  NAME: "hex",
  VAL: p_1
};

var active_1 = "#0C5CD9".slice(1);

var active = {
  NAME: "hex",
  VAL: active_1
};

var LightBackground = {
  main: smokeWhite,
  p: p,
  light: accentBlue,
  active: active
};

var $$Text = {
  LightBackground: LightBackground,
  standardFont: "Lato"
};

var primary = mainBlue;

export {
  removeHex ,
  r ,
  toS ,
  white ,
  purple ,
  black ,
  greyO4 ,
  whiteO2 ,
  whiteO4 ,
  whiteOc ,
  clear ,
  textDarker ,
  textDark ,
  textMedium ,
  smokeWhite ,
  buttonHover ,
  lightGrayBackground ,
  lighterGrayBackground ,
  grayBackground ,
  greydisabled ,
  accentBlue ,
  accentBlueO8 ,
  accentBlue1a ,
  mainBlue ,
  link ,
  linkHover ,
  linkAccent ,
  darkLink ,
  darkAccentBlue ,
  grey1 ,
  border ,
  primary ,
  FontWeights ,
  Transitions ,
  BorderRadius ,
  Statuses ,
  Alert ,
  $$Text ,
  
}
/* white Not a pure module */
