/* TypeScript file generated from UncurriedReducer.res by genType. */
/* eslint-disable import/first */


const $$toRE964503518: { [key: string]: any } = {"Increment": 0, "Decrement": 1, "Reset": 2, "Pause": 3, "Unpause": 4};

// @ts-ignore: Implicit any on import
import * as UncurriedReducerBS__Es6Import from './UncurriedReducer.bs';
const UncurriedReducerBS: any = UncurriedReducerBS__Es6Import;

// tslint:disable-next-line:interface-over-type-literal
export type state = 
    { tag: "Idle"; value: number }
  | { tag: "Paused"; value: number };

// tslint:disable-next-line:interface-over-type-literal
export type event = 
    "Increment"
  | "Decrement"
  | "Reset"
  | "Pause"
  | "Unpause";

export const initial: state = UncurriedReducerBS.initial.TAG===0
? {tag:"Idle", value:UncurriedReducerBS.initial._0}
: {tag:"Paused", value:UncurriedReducerBS.initial._0};

export const transition: (_1:state, _2:event) => state = function (Arg1: any, Arg2: any) {
  const result = UncurriedReducerBS.transition(Arg1.tag==="Idle"
    ? {TAG: 0, _0:Arg1.value} as any
    : {TAG: 1, _0:Arg1.value} as any, $$toRE964503518[Arg2]);
  return result.TAG===0
    ? {tag:"Idle", value:result._0}
    : {tag:"Paused", value:result._0}
};
