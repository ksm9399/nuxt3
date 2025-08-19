import { Notify } from "quasar"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:error', (error) => {
    // console.log('vue:error hook triggered', error)

    if (error instanceof Error) {
      if (import.meta.client) {
        Notify.create({
          message: error.message || 'An error occurred',
          type: 'warning',
        })
      }
      else {
        console.log('error: ', error.message)
      }

    }
  })

  nuxtApp.hook('vue:error', (error) => {
    // console.log('vue:error hook triggered', error)

    if (error instanceof Error) {
      if (import.meta.client) {
        Notify.create({
          message: error.message || 'An error occurred',
          type: 'negative',
        })
      }
      else {
        console.log('error: ', error.message)
      }
    }
  })
})