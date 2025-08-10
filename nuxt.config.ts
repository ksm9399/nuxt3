// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    'nuxt-quasar-ui',
    '@nuxt/eslint'
  ],
  typescript: {
    shim: false,
    typeCheck: true,
  },
  imports: {
    presets: [
      {
        from: 'vue-i18n',
        imports: ['useI18n'],
      }
    ]
  }
})