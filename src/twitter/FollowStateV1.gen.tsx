/* TypeScript file generated from FollowStateV1.res by genType. */
/* eslint-disable import/first */


const $$toJS644659689: { [key: string]: any } = {"0": "Following", "1": "FollowingHover", "2": "FollowingNeverMouseOut", "3": "NotFollowing", "4": "NotFollowingHover"};

const $$toRE644659689: { [key: string]: any } = {"Following": 0, "FollowingHover": 1, "FollowingNeverMouseOut": 2, "NotFollowing": 3, "NotFollowingHover": 4};

const $$toRE972952197: { [key: string]: any } = {"Click": 0, "MouseOver": 1, "MouseOut": 2};

// @ts-ignore: Implicit any on import
import * as FollowStateV1BS__Es6Import from './FollowStateV1.bs';
const FollowStateV1BS: any = FollowStateV1BS__Es6Import;

import {t as ButtonStyle_t} from './ButtonStyle.gen';

// tslint:disable-next-line:interface-over-type-literal
export type state = 
    "Following"
  | "FollowingHover"
  | "FollowingNeverMouseOut"
  | "NotFollowing"
  | "NotFollowingHover";

// tslint:disable-next-line:interface-over-type-literal
export type eventType = "Click" | "MouseOver" | "MouseOut";

export const getText: (state:state) => string = function (Arg1: any) {
  const result = FollowStateV1BS.getText($$toRE644659689[Arg1]);
  return result
};

export const getButtonStyle: (state:state) => ButtonStyle_t = function (Arg1: any) {
  const result = FollowStateV1BS.getButtonStyle($$toRE644659689[Arg1]);
  return result
};

export const machine: (_1:state, _2:eventType) => state = function (Arg1: any, Arg2: any) {
  const result = FollowStateV1BS.machine($$toRE644659689[Arg1], $$toRE972952197[Arg2]);
  return $$toJS644659689[result]
};
