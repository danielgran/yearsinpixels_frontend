// This file fixes the vuex store in the components
import { DefaultVuexStore } from '@/vue/VueStore/DefaultVuexStore';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: DefaultVuexStore;
  }
}
