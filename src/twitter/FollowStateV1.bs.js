

import * as Css from "bs-css-emotion/src/Css.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Button from "./Button.bs.js";
import * as Settings from "./Settings.bs.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

function getButtonVariant(variant) {
  if (variant !== 2) {
    if (variant >= 3) {
      return {
              text: Settings.toS(Settings.white),
              textHover: Settings.toS(Settings.white),
              border: Settings.toS(Settings.link),
              background: Settings.toS(Settings.link),
              backgroundHover: Settings.toS(Settings.linkHover)
            };
    } else {
      return {
              text: Settings.toS(Settings.textDark),
              textHover: Settings.toS(Settings.textDark),
              border: Settings.toS(Settings.accentBlueO8),
              background: Settings.toS(Settings.white),
              backgroundHover: Settings.toS(Settings.buttonHover)
            };
    }
  } else {
    return {
            text: Settings.toS(Settings.textDark),
            textHover: Settings.toS(Settings.textDark),
            border: Settings.toS(Settings.accentBlueO8),
            background: Settings.toS(Settings.purple),
            backgroundHover: Settings.toS(Settings.buttonHover)
          };
  }
}

function getText(state) {
  if (state !== 1) {
    if (state >= 3) {
      return "Follow";
    } else {
      return "Following";
    }
  } else {
    return "Unfollow";
  }
}

function getButtonStyle(state) {
  switch (state) {
    case /* Following */0 :
        return /* Highlight */0;
    case /* FollowingHover */1 :
        return /* Danger */1;
    case /* NotFollowing */3 :
        return /* None */3;
    case /* FollowingNeverMouseOut */2 :
    case /* NotFollowingHover */4 :
        return /* Hover */2;
    
  }
}

function machine(state, $$event) {
  switch (state) {
    case /* Following */0 :
        switch ($$event) {
          case /* Click */0 :
              return /* NotFollowing */3;
          case /* MouseOver */1 :
              return /* FollowingHover */1;
          case /* MouseOut */2 :
              return state;
          
        }
    case /* FollowingHover */1 :
        switch ($$event) {
          case /* Click */0 :
              return /* NotFollowingHover */4;
          case /* MouseOver */1 :
              return state;
          case /* MouseOut */2 :
              return /* Following */0;
          
        }
    case /* FollowingNeverMouseOut */2 :
        switch ($$event) {
          case /* Click */0 :
              return /* NotFollowingHover */4;
          case /* MouseOver */1 :
              return state;
          case /* MouseOut */2 :
              return /* Following */0;
          
        }
    case /* NotFollowing */3 :
        switch ($$event) {
          case /* Click */0 :
              return /* Following */0;
          case /* MouseOver */1 :
              return /* NotFollowingHover */4;
          case /* MouseOut */2 :
              return state;
          
        }
    case /* NotFollowingHover */4 :
        switch ($$event) {
          case /* Click */0 :
              return /* FollowingNeverMouseOut */2;
          case /* MouseOver */1 :
              return state;
          case /* MouseOut */2 :
              return /* NotFollowing */3;
          
        }
    
  }
}

function styles(variant) {
  var colors = getButtonVariant(variant);
  var main = Curry._1(Css.style, {
        hd: Css.lineHeight({
              NAME: "em",
              VAL: 1.5
            }),
        tl: {
          hd: Css.cursor("pointer"),
          tl: {
            hd: Css.borderRadius(Settings.BorderRadius.medium),
            tl: {
              hd: Css.border({
                    NAME: "px",
                    VAL: 1
                  }, "solid", {
                    NAME: "hex",
                    VAL: colors.border
                  }),
              tl: {
                hd: Css.color({
                      NAME: "hex",
                      VAL: colors.text
                    }),
                tl: {
                  hd: Css.background({
                        NAME: "hex",
                        VAL: colors.background
                      }),
                  tl: {
                    hd: Css.hover({
                          hd: Css.background({
                                NAME: "hex",
                                VAL: colors.backgroundHover
                              }),
                          tl: {
                            hd: Css.color({
                                  NAME: "hex",
                                  VAL: colors.textHover
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
  return Curry._1(Css.merge, {
              hd: main,
              tl: /* [] */0
            });
}

function reducer(state, $$event) {
  return machine(state, $$event);
}

function FollowStateV1(Props) {
  var match = React.useReducer(reducer, /* NotFollowing */3);
  var $$event = match[1];
  var state = match[0];
  var element = React.useRef(null);
  var possiblyClose = function (e) {
    Belt_Option.map(Caml_option.nullable_to_opt(element.current), (function (domElement) {
            console.log("domElement: ", domElement);
            var targetElement = e.target;
            console.log("targetElement: ", targetElement);
            if (domElement.contains(targetElement)) {
              return ;
            } else {
              return Curry._1($$event, /* MouseOut */2);
            }
          }));
    
  };
  React.useEffect((function () {
          return (function (param) {
                    document.removeEventListener("mousedown", possiblyClose);
                    
                  });
        }), []);
  return React.createElement(React.Fragment, undefined, React.createElement("div", undefined, state !== 1 ? (
                    state >= 3 ? React.createElement("button", {
                            ref: element,
                            className: styles(getButtonStyle(state)),
                            onClick: (function (evt) {
                                console.log("ONCLICK_EVENT: ", evt);
                                console.log("ONCLICK_STATE: ", state);
                                return Curry._1($$event, /* MouseOut */2);
                              })
                          }, getText(state)) : React.createElement("button", {
                            ref: element,
                            className: styles(getButtonStyle(state)),
                            onClick: (function (evt) {
                                console.log("ONCLICK_EVENT: ", evt);
                                console.log("ONCLICK_STATE: ", state);
                                return Curry._1($$event, /* MouseOut */2);
                              })
                          }, getText(state))
                  ) : React.createElement("button", {
                        ref: element,
                        className: Button.getStyle(getButtonStyle(state)),
                        onClick: (function (evt) {
                            console.log("ONCLICK_EVENT: ", evt);
                            console.log("ONCLICK_STATE: ", state);
                            return Curry._1($$event, /* MouseOut */2);
                          })
                      }, getText(state))));
}

var make = FollowStateV1;

export {
  getButtonVariant ,
  getText ,
  getButtonStyle ,
  machine ,
  styles ,
  reducer ,
  make ,
  
}
/* Css Not a pure module */
