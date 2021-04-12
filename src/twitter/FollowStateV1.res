// type color = [#hex(Js.String.t)]

type state =
  | Following
  | FollowingHover
  | FollowingNeverMouseOut
  | NotFollowing
  | NotFollowingHover
type eventType = Click | MouseOver | MouseOut
// type buttonStyle = Highlight | Danger | Hover | None
// type buttonStyle = Button.buttonStyle

type variantColors = {
  text: string,
  textHover: string,
  border: string,
  background: string,
  backgroundHover: string,
}
let getButtonVariant = (variant: ButtonStyle.t) => {
  open Settings
  switch variant {
  | None => {
      text: white |> toS,
      textHover: white |> toS,
      border: link |> toS,
      background: link |> toS,
      backgroundHover: linkHover |> toS,
    }
  | Danger => {
      text: textDark |> toS,
      textHover: textDark |> toS,
      border: accentBlueO8 |> toS,
      background: white |> toS,
      backgroundHover: buttonHover |> toS,
    }
  | Hover => {
      text: textDark |> toS,
      textHover: textDark |> toS,
      border: accentBlueO8 |> toS,
      background: purple |> toS,
      backgroundHover: buttonHover |> toS,
    }
  | Highlight => {
      text: textDark |> toS,
      textHover: textDark |> toS,
      border: accentBlueO8 |> toS,
      background: white |> toS,
      backgroundHover: buttonHover |> toS,
    }
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

export getButtonStyle: state => ButtonStyle.t = (state: state) => {
  switch state {
  | FollowingHover => Danger
  | Following => Highlight
  | NotFollowing => None
  | NotFollowingHover
  | FollowingNeverMouseOut =>
    Hover
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

let styles = (~variant) => {
  let colors = getButtonVariant(variant)

  let main = {
    open Css
    style(list{
      lineHeight(#em(1.5)),
      cursor(#pointer),
      borderRadius(Settings.BorderRadius.medium),
      border(#px(1), #solid, #hex(colors.border)),
      color(#hex(colors.text)),
      background(#hex(colors.background)),
      hover(list{background(#hex(colors.backgroundHover)), color(#hex(colors.textHover))}),
    })
  }

  Css.merge(list{main})
}
let reducer = (state, event) => machine(. state, event)
open Webapi.Dom
@react.component
let make = () => {
  let (state, event) = React.useReducer(reducer, NotFollowing)

  let text = () => getText(state)

  // let mouseOutRef = MouseOut.useMouseOut(_ => {
  //   Js.log("MouseOut: ")
  //   event(MouseOut)
  // })
  let element = React.useRef(Js.Nullable.null)
  let possiblyClose = e =>
    element.current
    ->Js.Nullable.toOption
    ->Belt.Option.map(domElement => {
      Js.log2("domElement: ", domElement)
      let targetElement = MouseEvent.target(e) |> EventTarget.unsafeAsElement
      Js.log2("targetElement: ", targetElement)

      domElement |> Element.contains(targetElement) ? () : event(MouseOut)
    })
    ->ignore
  // let onMouseEnter = (~evt: eventType) => {
  //   event(evt)
  // }
  // let onMouseLeave = (~evt: eventType) => event(evt)


  React.useEffect0(() => Some(() => Document.removeMouseDownEventListener(possiblyClose, document)))
  // let handleMouseEvent = (e: Dom.mouseEvent) => {
  //   // let screenX = Webapi.Dom.MouseEvent.screenX(e);
  //   // let screenY = Webapi.Dom.MouseEvent.screenY(e);
  //   //   MouseOut.useMouseOut(_ => {
  //   //   Js.log("MouseOut: ")
  //   //   event(MouseOut)
  //   // })
  //   Js.log2("MouseOut_EVENT: ", e)
  //   event(MouseOut)
  // }
  // React.useEffect0(() => {
  //   open Webapi.Dom
  //   /* see: https://github.com/reasonml-community/bs-webapi-incubator/blob/6b2a63ebce3f96159a2d0e9efcb853d1fd43f497/examples/dom_example.re#L96 */
  //   Webapi.Dom.Document.addMouseMoveEventListener(handleMouseEvent, document)
  //   Some(() => Webapi.Dom.Document.removeMouseDownEventListener(handleMouseEvent, document))
  // })
  <>

    <div>
      {switch state {
      | Following | FollowingNeverMouseOut =>
        <button
        // ref={ReactDOM.Ref.domRef(mouseOutRef)}
          ref={ReactDOM.Ref.domRef(element)}
          onClick={evt => {
            Js.log2("ONCLICK_EVENT: ", evt)
            Js.log2("ONCLICK_STATE: ", state)
            event(MouseOut)
          }}
          className={styles(~variant=getButtonStyle(state))}>
          {React.string(text())}
        </button>
      | NotFollowing | NotFollowingHover =>
        <button
        // onMouseEnter
        //   onMouseLeave
        // domRef={ReactDOMRe.Ref.domRef(buttonRef)}
          ref={ReactDOM.Ref.domRef(element)}
          onClick={evt => {
            Js.log2("ONCLICK_EVENT: ", evt)
            Js.log2("ONCLICK_STATE: ", state)
            event(MouseOut)
          }}
          className={styles(~variant=getButtonStyle(state))}>
          {React.string(text())}
        </button>
      | FollowingHover =>
        <button
          ref={ReactDOM.Ref.domRef(element)}
          onClick={evt => {
            Js.log2("ONCLICK_EVENT: ", evt)
            Js.log2("ONCLICK_STATE: ", state)
            event(MouseOut)
          }}
          className={Button.getStyle(~variant=getButtonStyle(state))}>
          {React.string(text())}
        </button>
      }}
    </div>

    // <button onClick={_ => event}> {React.string(text)} </button>

    // <button type_="button" style="background-color: white; color: black; padding: 15px 40px; font-size: 40px; border: 1px solid rgb(102, 102, 102); border-radius: 15px; cursor: pointer;">{React.string("Follow")}</button>
  </>
}
