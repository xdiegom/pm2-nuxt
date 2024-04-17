// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      FOO_KEY: process.env.NUXT_FOO_KEY
    }
  }
})
