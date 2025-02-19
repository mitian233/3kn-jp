// https://nuxt.com/docs/api/configuration/nuxt-config
import siteConfig from "./site.config";
export default defineNuxtConfig({
    devtools: { enabled: true },

    app: {
        head: {
            htmlAttrs: {
                lang: "ja",
            },
            title: siteConfig.title,
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            link: [
                { rel: "icon", href: "/favicon.svg" },
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "anonymous",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,400;1,400&family=Noto+Sans+JP:wght@100..900&display=swap",
                },
            ],
            meta: [
                { name: "mobile-web-app-capable", content: "yes" },
                {
                    name: "apple-mobile-web-app-status-bar-style",
                    content: "black-translucent",
                },
                { name: "og:description", content: "Mikan's Homepage" },
                { name: "og:image", content: "https://3kn.jp/ogp.png" },
                { name: "og:url", content: "https://3kn.jp/" },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:title", content: "3kn.jp" },
                { name: "twitter:description", content: "Mikan's Homepage" },
                { name: "twitter:image", content: "https://3kn.jp/ogp.png" },
                { name: "twitter:url", content: "https://3kn.jp/" },
            ],
        },
    },

    css: ["~/main.css"],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    modules: ["nuxt-gtag", "@nuxt/eslint"],

    gtag: {
        id: "G-3JH0BQ2RSZ",
    },

    compatibilityDate: "2025-01-15",
});
