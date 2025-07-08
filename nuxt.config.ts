import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "shadcn-nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/sitemap",
  ],
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  i18n: {
    langDir: "locales/",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en.ts",
      },
    ],
    strategy: "prefix_except_default",
    defaultLocale: "en",
  },
});
