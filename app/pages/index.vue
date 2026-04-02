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
  ],
  link: [
    { rel: 'canonical', href: 'https://nexoma.poitiers.digital/', key: 'canonical' }
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
