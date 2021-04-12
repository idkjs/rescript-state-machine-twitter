module Json ={
type t = Js.Json.t

@val external parseExn: string => t = "JSON.parse"
@val external stringify: t => string = "JSON.stringify"
@val external stringifyWithIndent: (t, @as(json`null`) _, int) => string = "JSON.stringify"

}
module Styles = {
  open Css
  let button = style(list{
    backgroundColor(hex("FDFEC3c0")),
    // border(px(1), solid, hex("f0f0f0")),
    borderWidth(zero),
    color(hex("6c564b")),
    fontSize(px(14)),
    fontWeight(#num(500)),
    display(#inlineBlock),
    padding2(~v=px(6), ~h=px(12)),
    borderRadius(px(2)),
    textTransform(uppercase),
    transition(~duration=200, "background-color"),
    cursor(pointer),
    hover(list{backgroundColor(hex("FDFEC3"))}),
  })
  let cat = style(list{
    backgroundColor(hex("FDFEC3c0")),
    // border(px(1), solid, hex("f0f0f0")),
    borderWidth(zero),
    color(hex("6c564b")),
    fontSize(px(14)),
    width(px(200)),
    height(px(200)),
    margin(px(8)),
    display(#inlineBlock),
    padding2(~v=px(6), ~h=px(12)),
    borderRadius(px(2)),
    textTransform(uppercase),
    transition(~duration=200, "background-color"),
    cursor(pointer),
    hover(list{backgroundColor(hex("FDFEC3"))}),
  })
}
type cat = {name: string, color: string}
let cats = [
  {name: "Mr. Whiskers", color: "black"},
  {name: "Sassy", color: "white"},
  {name: "Smokey", color: "gray"},
]
// let parseJson = data =>
//   try Some(Js.Json.parseExn(data)) catch {
//   | _ => None
//   }
// let log = %raw(`
//   function(event) {
//     // console.log("hello from raw JavaScript!");
//     console.log(JSON.parse(event.target.dataset.info));
//     return event
//   }
// `)

@react.component
let make = () => {
  let handleMouseOver = (event) => {
  // Js.log(event["target"]["value"])
 let eventTarget = ReactEvent.Mouse.target(event)
     Js.log2("eventTarget: ", eventTarget)
     Js.log2("eventTarget: ", eventTarget["data"])
 let dataset = ReactEvent.Mouse.target(event)["dataset"]
     Js.log2("dataset: ", dataset)

  // Js.log2("ReactEvent.Mouse.target: ",ReactEvent.Mouse.target(event)["relatedTarget"]["info"])
  let eJson = event->Obj.magic
    Js.log2("eJson+DATASET: ", eJson["target"]["dataset"])
    Js.log2("eJson: ", eJson["target"]["dataset"]["info"])
    Js.log2("event: ", event)
  }
  <div
    className={
      open Css
      merge(list{Styles.button})
    }>
    {React.string("Cats")}
    {cats
    |> Array.mapi((i, cat) =>
      <div
        key={string_of_int(i)}
        data={Js.Json.stringifyAny(cat)->Belt.Option.getWithDefault("No Cat")}
        className={Css.merge(list{Styles.cat})}
        onMouseOver={e => e->handleMouseOver}>
        {React.string(cat.name)}
      </div>
    )
    |> React.array}

    // {cats->Array.mapi((i,cat) => (
    //   <div
    //     key={i}
    //     dataInfo={Js.Json.stringify(cat)}
    //     style={{ width: 200, height: 200, backgroundColor: 'red', margin: 8, display: 'inline-block' }}
    //     onMouseOver={handleMouseOver}>
    //       {cat.name}
    //     </div>
    // ))}
  </div>
}
