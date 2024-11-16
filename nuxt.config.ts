// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/stylesheets/all.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/stylesheets/_variables.scss";
          `,
        },
      },
    },
    server: {
      hmr: {
        clientPort: 3000,
      },
    },
  },
  components: {
    dirs: [
      {
        path: '~/components/global',
        global: true, // 全域註冊
      },
      '~/components', // 區域註冊
    ],
  },
  imports: {
    dirs: ['stores'],
  },
});
