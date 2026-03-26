<script setup lang="ts">
useScrollReveal()
const { showForm, formSubmitted, openForm, closeForm, markSubmitted } = useContactForm()

const title = 'Nexoma | Votre équipe IA sur-mesure — Poitiers & Vienne (86)'
const description = 'Nexoma optimise votre entreprise avec l\'IA sur-mesure. On automatise ce qui vous coûte du temps et de l\'argent. 207+ entreprises transformées dans la Vienne (86). Résultats en 21 jours ou remboursé.'

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
  { label: 'FAQ', to: '#faq' }
]

// Form state
const form = reactive({
  firstName: '',
  lastName: '',
  company: '',
  phone: '',
  email: '',
  employees: '' as string,
  mainChallenge: '' as string,
  message: '',
  timeSlot: '' as string
})
const formLoading = ref(false)
const formError = ref('')

const employeeRanges = [
  { value: '1-5', label: '1 — 5' },
  { value: '6-20', label: '6 — 20' },
  { value: '21-50', label: '21 — 50' },
  { value: '50+', label: '50+' }
]

const challenges = [
  { value: 'temps', label: 'Gagner du temps', icon: 'i-lucide-clock' },
  { value: 'tresorerie', label: 'Récupérer de l\'argent', icon: 'i-lucide-trending-up' },
  { value: 'clients', label: 'Ne plus perdre de clients', icon: 'i-lucide-users' },
  { value: 'equipe', label: 'Libérer mon équipe', icon: 'i-lucide-unlock' }
]

const timeSlots = [
  { value: '9h-12h', label: '9h — 12h' },
  { value: '12h-14h', label: '12h — 14h' },
  { value: '14h-19h', label: '14h — 19h' }
]

async function submitForm() {
  formLoading.value = true
  formError.value = ''

  try {
    // Formspree - gratuit 50 soumissions/mois
    // Pour activer: crée un form sur formspree.io et remplace l'ID ci-dessous
    const response = await fetch('https://formspree.io/f/xpwdgekb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _subject: `🔥 Nouveau lead Nexoma — ${form.company} (${form.employees} salariés)`,
        _cc: 'matthieu@shark-graphil.fr',
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        phone: form.phone,
        company: form.company,
        employees: form.employees,
        main_challenge: form.mainChallenge,
        message: form.message,
        preferred_time: form.timeSlot
      })
    })

    if (response.ok) {
      markSubmitted()
    } else {
      // Fallback: mailto
      const body = `Nom: ${form.firstName} ${form.lastName}%0AEntreprise: ${form.company} (${form.employees} salariés)%0ATéléphone: ${form.phone}%0AEmail: ${form.email}%0ADéfi principal: ${form.mainChallenge}%0ACréneau: ${form.timeSlot}%0A%0ABesoin: ${form.message}`
      window.location.href = `mailto:contact@poitiers.digital?subject=Demande de diagnostic — ${form.company}&body=${body}`
      markSubmitted()
    }
  } catch {
    const body = `Nom: ${form.firstName} ${form.lastName}%0AEntreprise: ${form.company}%0ATéléphone: ${form.phone}%0AEmail: ${form.email}%0ACréneau: ${form.timeSlot}%0A%0ABesoin: ${form.message}`
    window.location.href = `mailto:contact@poitiers.digital?subject=Demande de diagnostic — ${form.company}&body=${body}`
    markSubmitted()
  } finally {
    formLoading.value = false
  }
}
</script>

<template>
  <UApp>
    <!-- Navbar -->
    <header class="fixed top-0 left-0 right-0 z-50 navbar-blur">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="flex-shrink-0">
            <AppLogo />
          </NuxtLink>

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

          <div class="flex items-center gap-3">
            <button
              class="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm
                     rounded-xl font-medium transition-all duration-300
                     shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]
                     hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.6)]
                     hover:-translate-y-0.5 cursor-pointer"
              @click="openForm"
            >
              Nous contacter
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
          <div class="md:col-span-1">
            <AppLogo class="mb-4" />
            <p class="text-sm text-white/40 leading-relaxed mb-6">
              Votre équipe IA sur-mesure.<br>
              Poitiers & Vienne (86).
            </p>
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

          <div>
            <h4 class="text-sm font-semibold text-white mb-4">Solutions</h4>
            <ul class="space-y-3">
              <li><a href="#solution" class="text-sm text-white/40 hover:text-white/70 transition-colors">Automatisation des tâches</a></li>
              <li><a href="#solution" class="text-sm text-white/40 hover:text-white/70 transition-colors">Suivi & recouvrement</a></li>
              <li><a href="#solution" class="text-sm text-white/40 hover:text-white/70 transition-colors">Accueil & relation client</a></li>
              <li><a href="#solution" class="text-sm text-white/40 hover:text-white/70 transition-colors">Productivité des équipes</a></li>
              <li><a href="#solution" class="text-sm text-white/40 hover:text-white/70 transition-colors">Veille & opportunités</a></li>
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
              <li><a href="mailto:contact@poitiers.digital" class="text-sm text-white/40 hover:text-emerald-400 transition-colors">contact@poitiers.digital</a></li>
              <li>
                <button
                  class="text-sm text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                  @click="openForm"
                >
                  Nous contacter →
                </button>
              </li>
            </ul>
          </div>
        </div>

        <!-- Divisions -->
        <div class="border-t border-white/[0.06] pt-8 mb-4">
          <p class="text-xs font-semibold uppercase tracking-widest text-white/25 mb-4">Studio Digital Poitiers — nos divisions</p>
          <div class="flex flex-wrap gap-x-6 gap-y-2">
            <a href="https://poitiers.digital" target="_blank" rel="noopener" class="text-sm text-white/35 hover:text-white transition-colors">← Studio Digital Poitiers</a>
            <a href="https://adscale.poitiers.digital" target="_blank" rel="noopener" class="text-sm text-white/35 hover:text-[#4285f4] transition-colors">ADSCALE — Google Ads</a>
            <a href="https://rankeo.poitiers.digital" target="_blank" rel="noopener" class="text-sm text-white/35 hover:text-[#34a853] transition-colors">RANKEO — SEO</a>
            <a href="https://nexoma.poitiers.digital" class="text-sm text-emerald-400/70">NEXOMA — IA & Automatisation</a>
            <a href="https://nova-studio.poitiers.digital" target="_blank" rel="noopener" class="text-sm text-white/35 hover:text-[#f43f5e] transition-colors">NOVA STUDIO — UGC & Contenu</a>
          </div>
        </div>

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

      <div class="bg-[#020202] py-6">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <p class="text-xs text-white/15 leading-relaxed">
            Nexoma — Agence IA pour PME à Poitiers, Châtellerault, Loudun, Montmorillon, Civray et tout le département de la Vienne (86).
            Automatisation, agents IA, intelligence artificielle pour entreprises.
          </p>
        </div>
      </div>
    </footer>

    <!-- Contact Form Modal -->
    <UModal v-model:open="showForm" :scrollable="true">
      <template #content>
        <div class="bg-[#0a0a0f] rounded-2xl p-6 sm:p-8 w-full max-w-lg">
          <!-- Header -->
          <div class="flex items-center justify-between mb-8">
            <div>
              <h3 class="text-xl font-bold text-white">Parlons de votre projet</h3>
              <p class="text-sm text-white/40 mt-1">Réponse sous 24h — Diagnostic gratuit</p>
            </div>
            <button
              class="text-white/40 hover:text-white transition-colors cursor-pointer p-1"
              @click="closeForm"
            >
              <UIcon name="i-lucide-x" class="text-xl" />
            </button>
          </div>

          <!-- Success state -->
          <div v-if="formSubmitted" class="text-center py-12">
            <div class="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
              <UIcon name="i-lucide-check" class="text-emerald-400 text-3xl" />
            </div>
            <h4 class="text-xl font-semibold text-white mb-2">Message envoyé !</h4>
            <p class="text-white/50 mb-8">Nous vous recontactons sous 24h pour un diagnostic gratuit de vos process.</p>
            <button
              class="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl
                     font-medium transition-all duration-300 border border-white/10 cursor-pointer"
              @click="closeForm"
            >
              Fermer
            </button>
          </div>

          <!-- Form -->
          <form v-else class="space-y-5" @submit.prevent="submitForm">
            <!-- Nom / Prénom -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Prénom</label>
                <input
                  v-model="form.firstName"
                  type="text"
                  required
                  placeholder="Jean"
                  class="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08]
                         text-white placeholder-white/25 text-sm
                         focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.06]
                         transition-all duration-300"
                >
              </div>
              <div>
                <label class="block text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Nom</label>
                <input
                  v-model="form.lastName"
                  type="text"
                  required
                  placeholder="Dupont"
                  class="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08]
                         text-white placeholder-white/25 text-sm
                         focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.06]
                         transition-all duration-300"
                >
              </div>
            </div>

            <!-- Entreprise -->
            <div>
              <label class="block text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Entreprise</label>
              <input
                v-model="form.company"
                type="text"
                required
                placeholder="Nom de votre entreprise"
                class="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08]
                       text-white placeholder-white/25 text-sm
                       focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.06]
                       transition-all duration-300"
              >
            </div>

            <!-- Nombre de salariés -->
            <div>
              <label class="block text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Nombre de salariés</label>
              <div class="grid grid-cols-4 gap-3">
                <label
                  v-for="range in employeeRanges"
                  :key="range.value"
                  class="relative flex items-center justify-center px-2 py-2.5 rounded-xl cursor-pointer
                         text-sm font-medium transition-all duration-300 text-center"
                  :class="form.employees === range.value
                    ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-400'
                    : 'bg-white/[0.04] border border-white/[0.08] text-white/50 hover:border-white/[0.15] hover:text-white/70'"
                >
                  <input
                    v-model="form.employees"
                    type="radio"
                    name="employees"
                    :value="range.value"
                    required
                    class="sr-only"
                  >
                  {{ range.label }}
                </label>
              </div>
            </div>

            <!-- Défi principal -->
            <div>
              <label class="block text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Votre défi principal</label>
              <div class="grid grid-cols-2 gap-3">
                <label
                  v-for="ch in challenges"
                  :key="ch.value"
                  class="relative flex items-center gap-2 px-3 py-3 rounded-xl cursor-pointer
                         text-sm font-medium transition-all duration-300"
                  :class="form.mainChallenge === ch.value
                    ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-400'
                    : 'bg-white/[0.04] border border-white/[0.08] text-white/50 hover:border-white/[0.15] hover:text-white/70'"
                >
                  <input
                    v-model="form.mainChallenge"
                    type="radio"
                    name="mainChallenge"
                    :value="ch.value"
                    required
                    class="sr-only"
                  >
                  <UIcon :name="ch.icon" class="text-base flex-shrink-0" />
                  {{ ch.label }}
                </label>
              </div>
            </div>

            <!-- Téléphone + Email -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Téléphone</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  placeholder="06 12 34 56 78"
                  class="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08]
                         text-white placeholder-white/25 text-sm
                         focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.06]
                         transition-all duration-300"
                >
              </div>
              <div>
                <label class="block text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="jean@entreprise.fr"
                  class="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08]
                         text-white placeholder-white/25 text-sm
                         focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.06]
                         transition-all duration-300"
                >
              </div>
            </div>

            <!-- Besoin -->
            <div>
              <label class="block text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Décrivez votre besoin</label>
              <textarea
                v-model="form.message"
                required
                rows="3"
                placeholder="Ex: J'ai besoin d'automatiser mes devis et relances clients..."
                class="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08]
                       text-white placeholder-white/25 text-sm resize-none
                       focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.06]
                       transition-all duration-300"
              />
            </div>

            <!-- Créneau horaire -->
            <div>
              <label class="block text-xs text-white/50 uppercase tracking-wider mb-3 font-medium">
                Meilleur moment pour vous contacter
              </label>
              <div class="grid grid-cols-3 gap-3">
                <label
                  v-for="slot in timeSlots"
                  :key="slot.value"
                  class="relative flex items-center justify-center px-3 py-3 rounded-xl cursor-pointer
                         text-sm font-medium transition-all duration-300 text-center"
                  :class="form.timeSlot === slot.value
                    ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-400'
                    : 'bg-white/[0.04] border border-white/[0.08] text-white/50 hover:border-white/[0.15] hover:text-white/70'"
                >
                  <input
                    v-model="form.timeSlot"
                    type="radio"
                    name="timeSlot"
                    :value="slot.value"
                    required
                    class="sr-only"
                  >
                  {{ slot.label }}
                </label>
              </div>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="formLoading"
              class="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl
                     font-semibold text-base glow-button cursor-pointer
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                     transition-all duration-300 mt-2"
            >
              <span v-if="formLoading" class="flex items-center justify-center gap-2">
                <UIcon name="i-lucide-loader-2" class="animate-spin" />
                Envoi en cours...
              </span>
              <span v-else>Demander mon diagnostic gratuit →</span>
            </button>

            <p class="text-xs text-white/25 text-center mt-3">
              Gratuit & sans engagement — Vos données restent confidentielles
            </p>
          </form>
        </div>
      </template>
    </UModal>
  </UApp>
</template>
