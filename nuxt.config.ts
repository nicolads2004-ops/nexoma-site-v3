// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts'
  ],

  devtools: {
    enabled: false
  },

  css: ['~/assets/css/main.css'],

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] }
    ],
    defaults: {
      preload: true,
      fontDisplay: 'optional',
      fallbacks: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
      }
    }
  },

  routeRules: {
    '/**': { swr: 60 }
  },

  // Performance: SSR + prerender for SEO
  nitro: {
    compressPublicAssets: true,
    minify: true
  },

  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Agence IA Poitiers — Automatisation sur-mesure pour TPE/PME | Nexoma',
      meta: [
        { name: 'google-site-verification', content: 'ckptY8NA7qKLu2Yrn6qmQLlD3CHoB3MsWR0aIbMYZss' },
        { name: 'description', content: 'Nexoma, agence IA sur-mesure à Poitiers pour TPE/PME. Automatisation, agents IA, chatbots. Résultats en 21 jours ou remboursé.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Open Graph
        { property: 'og:title', content: 'Agence IA Poitiers — Automatisation sur-mesure pour TPE/PME' },
        { property: 'og:description', content: 'Nexoma optimise votre entreprise avec l\'IA sur-mesure. On automatise ce qui vous coûte du temps et de l\'argent. 207+ entreprises transformées dans la Vienne (86).' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://nexoma.poitiers.digital' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:site_name', content: 'Nexoma' },
        { property: 'og:image', content: 'https://nexoma.poitiers.digital/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Agence IA à Poitiers — Nexoma' },
        { name: 'twitter:description', content: 'Agence IA à Poitiers. Automatisation sur-mesure pour PME. 207+ entreprises optimisées. Résultats en 21 jours.' },
        { name: 'twitter:image', content: 'https://nexoma.poitiers.digital/og-image.jpg' },
        // SEO Keywords
        { name: 'keywords', content: 'agence IA Poitiers, intelligence artificielle PME, automatisation entreprise Vienne 86, agent IA sur-mesure, optimisation PME Poitiers, automatisation tâches Châtellerault, IA entreprise Poitiers, transformation digitale Vienne, agence automatisation Poitiers, consultant IA PME 86' },
        // Geo tags for local SEO
        { name: 'geo.region', content: 'FR-86' },
        { name: 'geo.placename', content: 'Poitiers' },
        { name: 'geo.position', content: '46.5802;0.3404' },
        { name: 'ICBM', content: '46.5802, 0.3404' },
        // Robots
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        // Canonical
        { name: 'author', content: 'Nexoma' },
        { name: 'theme-color', content: '#050505' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }
      ],
      script: []
    }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
