import { NuxtAxiosInstance } from '@nuxtjs/axios'
let $axios: NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}

const get = (apiEndpoint: string, params: any) => {
  return $axios.$get(apiEndpoint, { params })
}

const post = (apiEndpoint: string, params: any) => {
  return $axios.$post(apiEndpoint, params)
}

export {
  $axios,
  get,
  post
}
