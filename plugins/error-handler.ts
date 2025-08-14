import { Notify } from "quasar"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue:error', (error) => {
    // console.log('vue:error hook triggered', error)

    if (error instanceof Error) {
      Notify.create({
        message: error.message || 'An error occurred',
        type: 'negative',
      })
    }
  })
})