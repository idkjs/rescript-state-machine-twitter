module Styles = {
  open Css
  let button = style(list{
    backgroundColor(hex("FDFEC3c0")),
    // border(px(1), solid, hex("f0f0f0")),
    borderWidth(zero),
    color(hex("6c564b")),
    fontSize(px(14)),
    fontWeight(#num(500)),
    padding2(~v=px(6), ~h=px(12)),
    borderRadius(px(2)),
    textTransform(uppercase),
    transition(~duration=200, "background-color"),
    cursor(pointer),
    hover(list{backgroundColor(hex("FDFEC3"))}),
  })
}

@react.component
let make = (~onClick=?, ~onMouseEnter=?, ~onMouseLeave=?, ~domRef=?, ~className=?, ~children) => {
  //  let className = switch(className){
  //   | Some(className)=>className
  //  | None => ()
  //  }
  Js.log2("CLASSNAME: ", className)
  <button
    ?onClick
    ?onMouseEnter
    ?onMouseLeave
    className={
      open Css
      merge(list{Styles.button})
    }
    ref=?domRef>
    children
  </button>
}
