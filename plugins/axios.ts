import { NuxtAxiosInstance } from '@nuxtjs/axios'

export default function ({ $axios, redirect } : { $axios: NuxtAxiosInstance, redirect: Function }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error : any) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}