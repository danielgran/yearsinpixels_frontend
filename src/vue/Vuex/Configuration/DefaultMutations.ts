import IMutations from "@/vue/Vuex/IMutations"

import User from "@/Model/User"


export default class DefaultMutations implements IMutations {

  Mutations: {}

  constructor(){
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