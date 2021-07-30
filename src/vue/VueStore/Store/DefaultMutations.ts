import { DefaultState } from "./DefaultState"
import IState from "./IState"

export class DefaultMutations {

  Mutations: any
  state: IState

  constructor(somestate: DefaultState){

    this.state = somestate

    this.Mutations = {
      mockday() {
        somestate.name = "Whoop"
      }
    }
  }
}