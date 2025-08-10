// plugin으로 nuxt app 값 설정시 타입 추론가능
export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}!`
    }
  }
})