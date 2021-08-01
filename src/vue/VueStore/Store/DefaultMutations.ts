import { User } from "@/Model/User"
import { DefaultState } from "./DefaultState"
import IState from "./IState"

export class DefaultMutations {

  Mutations: any
  state: IState

  constructor(state: DefaultState){

    this.state = state

    this.Mutations = {
      mockday(state: any)
      {
        state.name = "Whoop"
      },
      SetUser(state: any, payload: User)
      {
        console.log(payload)
        state.localUser = payload
      }
    }
  }
}