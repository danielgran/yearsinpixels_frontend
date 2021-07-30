import { Store, StoreOptions } from "vuex";

export class DefaultStore extends Store<any> {

  constructor(options: StoreOptions<any>) {
    super(options)
  }

}