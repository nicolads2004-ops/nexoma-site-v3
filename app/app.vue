<script setup lang="ts">
useScrollReveal()
const { showCalendly, openCalendly, closeCalendly } = useCalendly()

const title = 'Nexoma | Votre équipe IA sur-mesure — Poitiers & Vienne (86)'
const description = 'Nexoma automatise vos devis, relances et accueil client grâce à des agents IA sur-mesure. +200 PME accompagnées dans la Vienne (86). Résultats en 3 semaines.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})

const navLinks = [
  { label: 'Problème', to: '#probleme' },
  { label: 'Solution', to: '#solution' },
  { label: 'Cas d\'usage', to: '#cas' },
  { label: 'Tarifs', to: '#tarifs' },
  { label: 'FAQ', to: '#faq' }
]
</script>

<template>
  <UApp>
    <!-- Navbar -->
    <header class="fixed top-0 left-0 right-0 z-50 navbar-blur">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="flex-shrink-0">
            <AppLogo />
          </NuxtLink>

          <!-- Nav links (desktop) -->
          <nav class="hidden md:flex items-center gap-8">
            <a
              v-for="link in navLinks"
              :key="link.label"
              :href="link.to"
              class="text-sm text-white/50 hover:text-white transition-colors duration-300 link-animated"
            >
              {{ link.label }}
            </a>
          </nav>

          <!-- CTA -->
          <div class="flex items-center gap-3">
            <button
              class="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm
                     rounded-xl font-medium transition-all duration-300
                     shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]
                     hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.6)]
                     hover:-translate-y-0.5 cursor-pointer"
              @click="openCalendly"
            >
              Réserver un appel
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main>
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="relative border-t border-white/[0.06] bg-[#030303]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <!-- Brand -->
          <div class="md:col-span-1">
            <AppLogo class="mb-4" />
            <p class="text-sm text-white/40 leading-relaxed mb-6">
              Votre équipe IA sur-mesure.<br>
              Poitiers & Vienne (86).
            </p>
            <!-- Social -->
            <div class="flex items-center gap-3">
              <a
                href="#"
                class="w-9 h-9 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.06]
                       flex items-center justify-center text-white/40 hover:text-white transition-all duration-300"
              >
                <UIcon name="i-simple-icons-linkedin" class="text-base" />
              </a>
              <a
                href="#"
                class="w-9 h-9 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.06]
                       flex items-center justify-center text-white/40 hover:text-white transition-all duration-300"
              >
                <UIcon name="i-simple-icons-x" class="text-base" />
              </a>
            </div>
          </div>

          <!-- Links -->
          <div>
            <h4 class="text-sm font-semibold text-white mb-4">Solutions</h4>
            <ul class="space-y-3">
              <li><a href="#solution" class="text-sm text-white/40 hover:text-white/70 transition-colors">Devis Express</a></li>
              <li><a href="#solution" class="text-sm text-white/40 hover:text-white/70 transition-colors">Relance & Recouvrement</a></li>
              <li><a href="#solution" class="text-sm text-white/40 hover:text-white/70 transition-colors">Accueil 24/7</a></li>
              <li><a href="#solution" class="text-sm text-white/40 hover:text-white/70 transition-colors">RH & Onboarding</a></li>
              <li><a href="#solution" class="text-sm text-white/40 hover:text-white/70 transition-colors">Veille Marchés Publics</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-white mb-4">Secteurs</h4>
            <ul class="space-y-3">
              <li><a href="#cas" class="text-sm text-white/40 hover:text-white/70 transition-colors">BTP & Artisanat</a></li>
              <li><a href="#cas" class="text-sm text-white/40 hover:text-white/70 transition-colors">Commerce & Retail</a></li>
              <li><a href="#cas" class="text-sm text-white/40 hover:text-white/70 transition-colors">Professions libérales</a></li>
              <li><a href="#cas" class="text-sm text-white/40 hover:text-white/70 transition-colors">Hôtellerie</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul class="space-y-3">
              <li class="text-sm text-white/40">Poitiers, Vienne (86)</li>
              <li><a href="mailto:contact@nexoma.fr" class="text-sm text-white/40 hover:text-emerald-400 transition-colors">contact@nexoma.fr</a></li>
              <li>
                <button
                  class="text-sm text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                  @click="openCalendly"
                >
                  Réserver un appel →
                </button>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-xs text-white/30">
            © {{ new Date().getFullYear() }} Nexoma. Tous droits réservés.
          </p>
          <div class="flex items-center gap-6">
            <a href="#" class="text-xs text-white/30 hover:text-white/50 transition-colors">Mentions légales</a>
            <a href="#" class="text-xs text-white/30 hover:text-white/50 transition-colors">Politique de confidentialité</a>
            <a href="#" class="text-xs text-white/30 hover:text-white/50 transition-colors">CGV</a>
          </div>
        </div>
      </div>

      <!-- SEO Local -->
      <div class="bg-[#020202] py-6">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <p class="text-xs text-white/15 leading-relaxed">
            Nexoma — Agence IA pour PME à Poitiers, Châtellerault, Loudun, Montmorillon, Civray et tout le département de la Vienne (86).
            Automatisation, agents IA, intelligence artificielle pour entreprises.
          </p>
        </div>
      </div>
    </footer>

    <!-- Calendly Modal -->
    <UModal v-model:open="showCalendly">
      <template #content>
        <div class="p-2 bg-[#0a0a0f] rounded-2xl">
          <div class="flex items-center justify-between px-4 py-3 mb-2">
            <h3 class="text-lg font-semibold text-white">Réserver votre diagnostic gratuit</h3>
            <button
              class="text-white/40 hover:text-white transition-colors cursor-pointer"
              @click="closeCalendly"
            >
              <UIcon name="i-lucide-x" class="text-xl" />
            </button>
          </div>
          <div
            class="calendly-inline-widget"
            data-url="https://calendly.com/nexoma-ia/30min"
            style="min-width: 320px; height: 630px;"
          />
        </div>
      </template>
    </UModal>
  </UApp>
</template>
