import { Component } from "vue";

export default interface IVueInstance {
  Instance: any;
  RootComponent: Component

  StartInstance(): void
  StopInstance(): void
}