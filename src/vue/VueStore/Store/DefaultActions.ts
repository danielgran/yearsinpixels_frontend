import IState from "./IState";

import { DefaultState } from "./DefaultState";

export class DefaultActions {

  state: IState

  constructor(state: DefaultState) {
  
    this.state = state
  } 



}