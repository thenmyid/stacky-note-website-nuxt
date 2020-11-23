

import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $sampleService(url: string): void
  }
}

Vue.prototype.$sampleService = (url: string) => console.log(url)
