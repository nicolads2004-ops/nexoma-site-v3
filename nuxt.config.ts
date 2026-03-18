// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  devtools: {
    enabled: false
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
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
      title: 'Nexoma | Agence IA pour PME à Poitiers — Automatisation & Optimisation (86)',
      meta: [
        { name: 'description', content: 'Nexoma, agence d\'intelligence artificielle à Poitiers (86). On optimise votre entreprise avec l\'IA sur-mesure : automatisation des tâches, recouvrement, accueil 24/7. 207+ entreprises transformées dans la Vienne. Résultats en 21 jours ou remboursé.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Open Graph
        { property: 'og:title', content: 'Nexoma | Agence IA pour PME à Poitiers (86)' },
        { property: 'og:description', content: 'On optimise votre entreprise avec l\'IA sur-mesure. Automatisation, recouvrement, accueil 24/7. 207+ PME transformées. Résultats en 21 jours.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://nexoma.poitiers.digital' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:site_name', content: 'Nexoma' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Nexoma | Agence IA pour PME à Poitiers' },
        { name: 'twitter:description', content: 'On optimise votre entreprise avec l\'IA sur-mesure. 207+ PME transformées dans la Vienne (86).' },
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
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'canonical', href: 'https://nexoma.poitiers.digital' },
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap', media: 'print', onload: 'this.media="all"' }
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
