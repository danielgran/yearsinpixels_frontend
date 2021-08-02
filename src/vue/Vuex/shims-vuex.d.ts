// This file fixes the vuex store in the components
import { DefaultVuexStore } from '@/vue/Vuex/VuexStore';
import { Store } from 'vuex';
import IState from './IState';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<IState>;
  }
}
