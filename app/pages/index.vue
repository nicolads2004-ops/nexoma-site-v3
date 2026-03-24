<script setup lang="ts">
// JSON-LD Structured Data for SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Nexoma',
        description: 'Agence IA à Poitiers spécialisée en automatisation pour PME. Agents IA sur-mesure, optimisation des process métier, accueil 24/7.',
        url: 'https://nexoma.poitiers.digital',
        email: 'contact@poitiers.digital',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Poitiers',
          addressRegion: 'Nouvelle-Aquitaine',
          postalCode: '86000',
          addressCountry: 'FR'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '46.5802',
          longitude: '0.3404'
        },
        areaServed: [
          { '@type': 'City', name: 'Poitiers' },
          { '@type': 'City', name: 'Châtellerault' },
          { '@type': 'City', name: 'Loudun' },
          { '@type': 'City', name: 'Montmorillon' },
          { '@type': 'City', name: 'Civray' },
          { '@type': 'City', name: 'Niort' },
          { '@type': 'City', name: 'La Rochelle' },
          { '@type': 'AdministrativeArea', name: 'Vienne (86)' }
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '207',
          bestRating: '5'
        },
        priceRange: '€€',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '19:00'
        },
        sameAs: [],
        serviceType: [
          'Intelligence artificielle pour entreprises',
          'Automatisation des process métier',
          'Agents IA sur-mesure',
          'Optimisation PME',
          'Transformation digitale'
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Combien de temps pour voir des résultats avec l\'IA en entreprise ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '21 jours. Semaine 1 : analyse de vos process. Semaine 2 : mise en place et tests. Semaine 3 : déploiement et formation. ROI mesurable dès le premier mois, garanti remboursé.'
            }
          },
          {
            '@type': 'Question',
            name: 'Est-ce que l\'IA fonctionne pour les PME à Poitiers ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui. Nexoma accompagne plus de 207 entreprises dans la Vienne (86) : BTP, commerce, professions libérales, hôtellerie, industrie. Chaque solution est construite sur-mesure pour vos process métier.'
            }
          },
          {
            '@type': 'Question',
            name: 'Combien coûte un agent IA pour une PME ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nos solutions coûtent entre 10x et 20x moins qu\'un salarié pour les mêmes tâches, et fonctionnent 24h/24. Abonnement mensuel sans engagement. Le diagnostic gratuit vous donne un chiffrage précis.'
            }
          },
          {
            '@type': 'Question',
            name: 'Quelle est la différence entre Nexoma et ChatGPT ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ChatGPT est un outil générique. Nexoma met en place des solutions IA entraînées sur VOS données, intégrées dans VOS outils (CRM, email, téléphone), qui tournent en autonomie sans intervention.'
            }
          },
          {
            '@type': 'Question',
            name: 'Mes données sont-elles en sécurité ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hébergement en France (OVH), conformité RGPD complète, chiffrement de bout en bout. Vos données ne sont jamais partagées. Accord de confidentialité signé avant chaque mission.'
            }
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Nexoma',
        url: 'https://nexoma.poitiers.digital',
        description: 'Agence IA pour PME — Poitiers & Vienne (86)',
        publisher: {
          '@type': 'Organization',
          name: 'Nexoma',
          url: 'https://nexoma.poitiers.digital'
        }
      })
    }
  ]
})
</script>

<template>
  <div>
    <LandingHeroSection />
    <LandingLogoMarquee />
    <LandingProblemSection />
    <LandingFeaturesBento />
    <LandingHowItWorks />
    <LandingStatsSection />
    <LandingUseCases />
    <LandingTestimonialsSection />
    <LandingFaqSection />
    <LandingCtaSection />
  </div>
</template>
