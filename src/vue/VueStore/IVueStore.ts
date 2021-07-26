import { IVueUsable } from "@/vue/IVueUsable";

export interface IVueStore extends IVueUsable {
  store: any

  Init(): any
}