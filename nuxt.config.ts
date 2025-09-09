// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    'nuxt-quasar-ui',
    '@nuxt/eslint',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
  quasar: {
    plugins: [
      'Notify',
    ],
    config: {
      notify: {
        position: 'top-right',
      }
    }
  },
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
  },
  app: {
    head: {
      title: 'Vue & Nuxt 강의',
      meta:[
        { name: 'description', content: '짐코딩 Vue & Nuxt 강의' },
      ]
    }
  }
})