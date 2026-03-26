<script setup lang="ts">
useHead({
  title: 'Blog IA & Automatisation — Nexoma Poitiers',
  meta: [
    {
      name: 'description',
      content: 'Conseils, guides et cas pratiques sur l\'intelligence artificielle et l\'automatisation pour les PME de Poitiers et la Vienne (86). Par l\'équipe Nexoma.'
    },
    { property: 'og:title', content: 'Blog IA & Automatisation — Nexoma Poitiers' },
    { property: 'og:description', content: 'Guides pratiques sur l\'IA et l\'automatisation pour PME. Par Nexoma, agence IA à Poitiers.' },
    { property: 'og:url', content: 'https://nexoma.poitiers.digital/blog' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://nexoma.poitiers.digital/blog' }
  ]
})

const articles = [
  {
    slug: 'ia-pme-poitiers-guide-debutant',
    title: 'IA pour les PME de Poitiers : par où commencer en 2026 ?',
    excerpt: 'L\'intelligence artificielle n\'est plus réservée aux grands groupes. Voici comment une PME de la Vienne peut l\'adopter concrètement.',
    date: '20 mars 2026',
    readTime: '7 min',
    category: 'Guide',
    image: '/images/blog/blog-nexoma-ia-pme.png'
  },
  {
    slug: 'automatiser-relances-clients-pme-poitiers',
    title: 'Comment automatiser ses relances clients et récupérer 5h par semaine — guide PME Poitiers',
    excerpt: 'Les relances manuelles sont chronophages et souvent oubliées. Un agent IA peut s\'en charger à votre place, 24h/24.',
    date: '22 mars 2026',
    readTime: '6 min',
    category: 'Cas pratique',
    image: '/images/blog/blog-nexoma-relances.png'
  },
  {
    slug: 'chatbot-ia-commerce-poitiers',
    title: 'Chatbot IA pour les commerces de Poitiers : répondre aux clients à toute heure',
    excerpt: 'Un assistant IA répond instantanément à vos clients sur votre site ou WhatsApp, même le soir et le week-end.',
    date: '24 mars 2026',
    readTime: '5 min',
    category: 'Solution',
    image: '/images/blog/blog-nexoma-chatbot.png'
  }
]

const categoryColors: Record<string, string> = {
  'Guide': 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  'Cas pratique': 'bg-amber-500/10 border-amber-500/20 text-amber-400',
  'Solution': 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
}

const { openForm } = useContactForm()
</script>

<template>
  <div class="min-h-screen bg-[#030303] text-white">
    <!-- Hero -->
    <section class="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.03] blur-3xl" />
      </div>
      <div class="relative max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
          <UIcon name="i-lucide-book-open" class="text-sm" />
          Ressources & conseils
        </div>
        <h1 class="text-4xl sm:text-5xl font-black tracking-tight mb-6">
          IA & Automatisation<br>
          <span class="text-emerald-400">pour les PME de Poitiers</span>
        </h1>
        <p class="text-lg text-white/50 max-w-2xl mx-auto">
          Guides pratiques, cas d'usage concrets et conseils terrain pour les entreprises de la Vienne
          qui veulent adopter l'intelligence artificielle sans se perdre dans le jargon.
        </p>
      </div>
    </section>

    <!-- Articles -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="article in articles"
            :key="article.slug"
            class="group flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.06]
                   hover:border-emerald-500/20 transition-all duration-300 overflow-hidden"
          >
            <NuxtLink :to="`/blog/${article.slug}`">
              <div class="overflow-hidden aspect-[2/1]">
                <img
                  :src="article.image"
                  :alt="article.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                >
              </div>
            </NuxtLink>

            <div class="flex flex-col flex-1 p-6">
              <div class="flex items-center gap-3 mb-4">
                <span
                  class="px-2.5 py-1 rounded-lg border text-xs font-medium"
                  :class="categoryColors[article.category]"
                >
                  {{ article.category }}
                </span>
                <span class="text-xs text-white/30">{{ article.date }}</span>
                <span class="text-xs text-white/30">· {{ article.readTime }}</span>
              </div>

              <NuxtLink :to="`/blog/${article.slug}`" class="flex-1">
                <h2 class="text-lg font-bold mb-3 leading-snug group-hover:text-emerald-400 transition-colors duration-300">
                  {{ article.title }}
                </h2>
                <p class="text-sm text-white/40 leading-relaxed">{{ article.excerpt }}</p>
              </NuxtLink>

              <NuxtLink
                :to="`/blog/${article.slug}`"
                class="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300
                       transition-colors duration-300 mt-6 font-medium"
              >
                Lire l'article
                <UIcon name="i-lucide-arrow-right" class="text-sm" />
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl font-bold mb-4">
          Vous voulez savoir ce que l'IA peut faire pour votre PME ?
        </h2>
        <p class="text-white/50 mb-8">
          Diagnostic gratuit en 30 minutes. On identifie vos gains rapides, sans jargon.
        </p>
        <button
          class="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold
                 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]
                 hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 cursor-pointer"
          @click="openForm"
        >
          Demander mon diagnostic gratuit →
        </button>
      </div>
    </section>
  </div>
</template>
