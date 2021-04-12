type state =
  | Following
  | FollowingHover
  | FollowingNeverMouseOut
  | NotFollowing
  | NotFollowingHover
type eventType = Click | MouseOver | MouseOut
type buttonStyle = Highlight | Danger | Hover | None

let styleTheButton = (buttonStyle: buttonStyle) => {
  open Css
  switch buttonStyle {
  | None =>
    style(list{
      backgroundColor(white),
      color(black),
      padding2(~v=px(15), ~h=px(40)),
      cursor(#pointer),
      backgroundSize(cover),
      border(px(1), #solid, hex("666666")),
      borderRadius(px(15)),
      fontSize(px(40)),
    })
  | Danger =>
    style(list{
      backgroundColor(red),
      color(white),
      padding2(~v=px(15), ~h=px(40)),
      cursor(#pointer),
      backgroundSize(cover),
      border(px(1), #solid, hex("666666")),
      borderRadius(px(15)),
      fontSize(px(40)),
    })
  | Hover =>
    style(list{
      backgroundColor(hex("EEEEEE")),
      color(black),
      padding2(~v=px(15), ~h=px(40)),
      cursor(#pointer),
      backgroundSize(cover),
      border(px(1), #solid, hex("666666")),
      borderRadius(px(15)),
      fontSize(px(40)),
    })
  | Highlight =>
    style(list{
      backgroundColor(purple),
      color(white),
      padding2(~v=px(15), ~h=px(40)),
      cursor(#pointer),
      backgroundSize(cover),
      border(px(1), #solid, hex("666666")),
      borderRadius(px(15)),
      fontSize(px(40)),
    })
  }
}
let theButtonStyleIs = (buttonStyle: buttonStyle) => {
  open Css
  switch buttonStyle {
  | None =>
    style(list{
      backgroundColor(white),
      color(black),
      padding2(~v=px(15), ~h=px(40)),
      cursor(#pointer),
      backgroundSize(cover),
      border(px(1), #solid, hex("666666")),
      borderRadius(px(15)),
      fontSize(px(40)),
    })
  | Danger =>
    style(list{
      backgroundColor(red),
      color(white),
      padding2(~v=px(15), ~h=px(40)),
      cursor(#pointer),
      backgroundSize(cover),
      border(px(1), #solid, hex("666666")),
      borderRadius(px(15)),
      fontSize(px(40)),
    })
  | Hover =>
    style(list{
      backgroundColor(hex("EEEEEE")),
      color(black),
      padding2(~v=px(15), ~h=px(40)),
      cursor(#pointer),
      backgroundSize(cover),
      border(px(1), #solid, hex("666666")),
      borderRadius(px(15)),
      fontSize(px(40)),
    })
  | Highlight =>
    style(list{
      backgroundColor(purple),
      color(white),
      padding2(~v=px(15), ~h=px(40)),
      cursor(#pointer),
      backgroundSize(cover),
      border(px(1), #solid, hex("666666")),
      borderRadius(px(15)),
      fontSize(px(40)),
    })
  }
}

export getButtonStyleVariantFrom: state => buttonStyle = (state: state) => {
  switch state {
  | FollowingHover => Danger
  | Following => Highlight
  | NotFollowing => None
  | NotFollowingHover
  | FollowingNeverMouseOut =>
    Hover
  }
}
export handleButtonStyling: state => string = (state: state) => {
  switch state {
  | FollowingHover => theButtonStyleIs(Danger)
  | Following => theButtonStyleIs(Highlight)
  | NotFollowing => theButtonStyleIs(None)
  | NotFollowingHover
  | FollowingNeverMouseOut =>
    theButtonStyleIs(Hover)
  }
}

export getText = (state: state) => {
  switch state {
  | NotFollowing
  | NotFollowingHover => "Follow"
  | FollowingHover => "Unfollow"
  | Following
  | FollowingNeverMouseOut => "Following"
  }
}

export machine = (. state: state, event: eventType) =>
  switch state {
  | NotFollowing =>
    switch event {
    | Click => Following
    | MouseOver => NotFollowingHover
    | MouseOut => state
    }
  | NotFollowingHover =>
    switch event {
    | Click => FollowingNeverMouseOut
    | MouseOut => NotFollowing
    | MouseOver => state
    }
  | FollowingNeverMouseOut =>
    switch event {
    | Click => NotFollowingHover
    | MouseOut => Following
    | MouseOver => state
    }
  | Following =>
    switch event {
    | MouseOver => FollowingHover
    | Click => NotFollowing
    | MouseOut => state
    }
  | FollowingHover =>
    switch event {
    | MouseOut => Following
    | Click => NotFollowingHover
    | MouseOver => state
    }
  }

let reducer = (state, event) => machine(. state, event)

@react.component
let make = () => {
  let (state, event) = React.useReducer(reducer, NotFollowing)
  let text = () => getText(state)
  let renderButton = () =>
    <button
      type_="button"
      onMouseEnter={_ => event(MouseOver)}
      onMouseLeave={_ => {
        event(MouseOut)
      }}
      onClick={_ => event(Click)}
      className={getButtonStyleVariantFrom(state)->styleTheButton}>
      {React.string(text())}
    </button>
  let renderButtonWithStyle = (className) =>
    <button
      type_="button"
      onMouseEnter={_ => event(MouseOver)}
      onMouseLeave={_ => {
        event(MouseOut)
      }}
      onClick={_ => event(Click)}
      className>
      {React.string(text())}
    </button>
  <>
    // {switch state {
    // | Following => renderButton()
    // | FollowingHover => renderButton()
    // | FollowingNeverMouseOut => renderButton()
    // | NotFollowing => renderButton()
    // | NotFollowingHover => renderButton()
    // }}
    {switch state {
    | Following => renderButtonWithStyle(state->handleButtonStyling)
    | FollowingHover => renderButtonWithStyle(state->handleButtonStyling)
    | FollowingNeverMouseOut => renderButtonWithStyle(state->handleButtonStyling)
    | NotFollowing => renderButtonWithStyle(state->handleButtonStyling)
    | NotFollowingHover => renderButtonWithStyle(state->handleButtonStyling)
    }}
  </>
}
