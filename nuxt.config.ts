// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-svgo', 'nuxt-swiper'],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'scss',
    // modules: ['navigation', 'pagination', 'autoplay', 'effectcreative'], // all modules are imported by default
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/const/vars.sass" as *\n',
          // sourceMap: false
        }
      }
    }
  },
  svgo: {
    autoImportPath: './assets/icons/',
    componentPrefix: 'Icon',
    svgoConfig: {
      // multipass: true,
      // plugins: [
      //   {
      //     name: 'preset-default',
      //     params: {
      //       overrides: {
      //         removeDoctype: false,
      //         removeViewBox: false
      //       }
      //     }
      //   }
      // ]
    }
  },
  app:{
    head: {
      title: 'Intracloud',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Описание сайта для SEO роботов' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: '@/public/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300..800&family=Open+Sans:wght@300..800&display=swap'},
      ]
    },
  },
})
