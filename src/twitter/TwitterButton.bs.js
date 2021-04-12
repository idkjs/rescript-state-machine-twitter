

import * as Css from "bs-css-emotion/src/Css.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

function styleTheButton(buttonStyle) {
  switch (buttonStyle) {
    case /* Highlight */0 :
        return Curry._1(Css.style, {
                    hd: Css.backgroundColor(Css.purple),
                    tl: {
                      hd: Css.color(Css.white),
                      tl: {
                        hd: Css.padding2(Css.px(15), Css.px(40)),
                        tl: {
                          hd: Css.cursor("pointer"),
                          tl: {
                            hd: Css.backgroundSize(Css.cover),
                            tl: {
                              hd: Css.border(Css.px(1), "solid", Css.hex("666666")),
                              tl: {
                                hd: Css.borderRadius(Css.px(15)),
                                tl: {
                                  hd: Css.fontSize(Css.px(40)),
                                  tl: /* [] */0
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  });
    case /* Danger */1 :
        return Curry._1(Css.style, {
                    hd: Css.backgroundColor(Css.red),
                    tl: {
                      hd: Css.color(Css.white),
                      tl: {
                        hd: Css.padding2(Css.px(15), Css.px(40)),
                        tl: {
                          hd: Css.cursor("pointer"),
                          tl: {
                            hd: Css.backgroundSize(Css.cover),
                            tl: {
                              hd: Css.border(Css.px(1), "solid", Css.hex("666666")),
                              tl: {
                                hd: Css.borderRadius(Css.px(15)),
                                tl: {
                                  hd: Css.fontSize(Css.px(40)),
                                  tl: /* [] */0
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  });
    case /* Hover */2 :
        return Curry._1(Css.style, {
                    hd: Css.backgroundColor(Css.hex("EEEEEE")),
                    tl: {
                      hd: Css.color(Css.black),
                      tl: {
                        hd: Css.padding2(Css.px(15), Css.px(40)),
                        tl: {
                          hd: Css.cursor("pointer"),
                          tl: {
                            hd: Css.backgroundSize(Css.cover),
                            tl: {
                              hd: Css.border(Css.px(1), "solid", Css.hex("666666")),
                              tl: {
                                hd: Css.borderRadius(Css.px(15)),
                                tl: {
                                  hd: Css.fontSize(Css.px(40)),
                                  tl: /* [] */0
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  });
    case /* None */3 :
        return Curry._1(Css.style, {
                    hd: Css.backgroundColor(Css.white),
                    tl: {
                      hd: Css.color(Css.black),
                      tl: {
                        hd: Css.padding2(Css.px(15), Css.px(40)),
                        tl: {
                          hd: Css.cursor("pointer"),
                          tl: {
                            hd: Css.backgroundSize(Css.cover),
                            tl: {
                              hd: Css.border(Css.px(1), "solid", Css.hex("666666")),
                              tl: {
                                hd: Css.borderRadius(Css.px(15)),
                                tl: {
                                  hd: Css.fontSize(Css.px(40)),
                                  tl: /* [] */0
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  });
    
  }
}

function theButtonStyleIs(buttonStyle) {
  switch (buttonStyle) {
    case /* Highlight */0 :
        return Curry._1(Css.style, {
                    hd: Css.backgroundColor(Css.purple),
                    tl: {
                      hd: Css.color(Css.white),
                      tl: {
                        hd: Css.padding2(Css.px(15), Css.px(40)),
                        tl: {
                          hd: Css.cursor("pointer"),
                          tl: {
                            hd: Css.backgroundSize(Css.cover),
                            tl: {
                              hd: Css.border(Css.px(1), "solid", Css.hex("666666")),
                              tl: {
                                hd: Css.borderRadius(Css.px(15)),
                                tl: {
                                  hd: Css.fontSize(Css.px(40)),
                                  tl: /* [] */0
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  });
    case /* Danger */1 :
        return Curry._1(Css.style, {
                    hd: Css.backgroundColor(Css.red),
                    tl: {
                      hd: Css.color(Css.white),
                      tl: {
                        hd: Css.padding2(Css.px(15), Css.px(40)),
                        tl: {
                          hd: Css.cursor("pointer"),
                          tl: {
                            hd: Css.backgroundSize(Css.cover),
                            tl: {
                              hd: Css.border(Css.px(1), "solid", Css.hex("666666")),
                              tl: {
                                hd: Css.borderRadius(Css.px(15)),
                                tl: {
                                  hd: Css.fontSize(Css.px(40)),
                                  tl: /* [] */0
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  });
    case /* Hover */2 :
        return Curry._1(Css.style, {
                    hd: Css.backgroundColor(Css.hex("EEEEEE")),
                    tl: {
                      hd: Css.color(Css.black),
                      tl: {
                        hd: Css.padding2(Css.px(15), Css.px(40)),
                        tl: {
                          hd: Css.cursor("pointer"),
                          tl: {
                            hd: Css.backgroundSize(Css.cover),
                            tl: {
                              hd: Css.border(Css.px(1), "solid", Css.hex("666666")),
                              tl: {
                                hd: Css.borderRadius(Css.px(15)),
                                tl: {
                                  hd: Css.fontSize(Css.px(40)),
                                  tl: /* [] */0
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  });
    case /* None */3 :
        return Curry._1(Css.style, {
                    hd: Css.backgroundColor(Css.white),
                    tl: {
                      hd: Css.color(Css.black),
                      tl: {
                        hd: Css.padding2(Css.px(15), Css.px(40)),
                        tl: {
                          hd: Css.cursor("pointer"),
                          tl: {
                            hd: Css.backgroundSize(Css.cover),
                            tl: {
                              hd: Css.border(Css.px(1), "solid", Css.hex("666666")),
                              tl: {
                                hd: Css.borderRadius(Css.px(15)),
                                tl: {
                                  hd: Css.fontSize(Css.px(40)),
                                  tl: /* [] */0
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  });
    
  }
}

function getButtonStyleVariantFrom(state) {
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

function handleButtonStyling(state) {
  switch (state) {
    case /* Following */0 :
        return theButtonStyleIs(/* Highlight */0);
    case /* FollowingHover */1 :
        return theButtonStyleIs(/* Danger */1);
    case /* NotFollowing */3 :
        return theButtonStyleIs(/* None */3);
    case /* FollowingNeverMouseOut */2 :
    case /* NotFollowingHover */4 :
        return theButtonStyleIs(/* Hover */2);
    
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

function reducer(state, $$event) {
  return machine(state, $$event);
}

function TwitterButton(Props) {
  var match = React.useReducer(reducer, /* NotFollowing */3);
  var $$event = match[1];
  var state = match[0];
  var renderButtonWithStyle = function (className) {
    return React.createElement("button", {
                className: className,
                type: "button",
                onClick: (function (param) {
                    return Curry._1($$event, /* Click */0);
                  }),
                onMouseEnter: (function (param) {
                    return Curry._1($$event, /* MouseOver */1);
                  }),
                onMouseLeave: (function (param) {
                    return Curry._1($$event, /* MouseOut */2);
                  })
              }, getText(state));
  };
  return React.createElement(React.Fragment, undefined, renderButtonWithStyle(handleButtonStyling(state)));
}

var make = TwitterButton;

export {
  styleTheButton ,
  theButtonStyleIs ,
  getButtonStyleVariantFrom ,
  handleButtonStyling ,
  getText ,
  machine ,
  reducer ,
  make ,
  
}
/* Css Not a pure module */
