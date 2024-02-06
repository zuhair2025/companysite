// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    modules: [
    // '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    'nuxt-aos',
    // 'nuxt-bootstrap-icons',
    // 'nuxt-icon',
    '@nuxt/ui'
  ],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
   //modules: ['pagination'], // all modules are imported by default
  }
})
