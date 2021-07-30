import { DefaultStateToBe } from "./DefaultState"
import IState from "./IState"

const a = {
  mut() {}
}

export class DefaultMutationsToBe {

  Mutations: any
  state: IState

  constructor(somestate: DefaultStateToBe){

    this.state = somestate

    this.Mutations = {
      mockday() {
        somestate.name = "Whoop"
      }
    }
  }
}