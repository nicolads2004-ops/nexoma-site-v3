// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Nexoma | Votre équipe IA sur-mesure — Poitiers & Vienne (86)',
      meta: [
        { name: 'description', content: 'Nexoma automatise vos devis, relances et accueil client grâce à des agents IA sur-mesure. +200 PME accompagnées dans la Vienne (86). Résultats en 3 semaines.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Nexoma | Votre équipe IA sur-mesure' },
        { property: 'og:description', content: 'Automatisez vos tâches chronophages avec des agents IA. Devis, relances, accueil 24/7. Résultats garantis.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap' }
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
