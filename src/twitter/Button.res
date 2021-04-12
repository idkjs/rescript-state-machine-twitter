open Css

// type buttonStyle =
//   | Highlight
//   | Danger
//   | Hover
//   | None

type buttonStyleColors = {
  background: string,
  backgroundHovered: string,
  color: string,
  colorHovered: string,
}

let buttonColors = (t: ButtonStyle.t) =>
  switch t {
  | None => {
      background: "white",
      backgroundHovered: "cec8c8",
      color: "908a8a",
      colorHovered: "423636",
    }
  | Danger => {
      background: "eadede",
      backgroundHovered: "f9c8c8",
      color: "a08181",
      colorHovered: "671919",
    }
  | Highlight => {
      background: "eadede",
      backgroundHovered: "f9c8c8",
      color: "a08181",
      colorHovered: "671919",
    }
  | Hover => {
      background: "eadede",
      backgroundHovered: "f9c8c8",
      color: "a08181",
      colorHovered: "671919",
    }
  }

let getStyle = (~variant: ButtonStyle.t) => {
  let colors = buttonColors(variant)
  style(list{
    color(#hex(colors.color)),
    borderRadius(#px(2)),
    padding2(~v=#px(1), ~h=#px(4)),
    cursor(#pointer),
    Css.float(#left),
    backgroundColor(hex(colors.background)),
    selector(
      ":hover",
      list{backgroundColor(hex(colors.backgroundHovered)), color(#hex(colors.colorHovered))},
    ),
  })
}
