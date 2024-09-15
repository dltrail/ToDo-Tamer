
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/ui", "pinia-plugin-persistedstate/nuxt", '@nuxtjs/tailwindcss'],
  ssr: false
});
