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
  { label: 'FAQ', to: '#faq' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Blog', to: '/blog' }
]

// Multi-step form state
const currentStep = ref(1)
const totalSteps = 4
const mobileOpen = ref(false)
const formLoading = ref(false)
const formError = ref('')

const form = reactive({
  painPoint: '' as string,
  teamSize: '' as string,
  aiExperience: '' as string,
  company: '',
  fullName: '',
  email: '',
  phone: ''
})

const stepTitles = [
  'Où perdez-vous le plus de temps ?',
  'Combien de personnes dans votre équipe ?',
  'Avez-vous déjà utilisé des outils IA ?',
  'On vous rappelle sous 24h'
]

const painPoints = [
  { value: 'relances', label: 'Relances clients / devis', icon: 'i-lucide-clock' },
  { value: 'saisie', label: 'Saisie manuelle / admin', icon: 'i-lucide-keyboard' },
  { value: 'service-client', label: 'Service client / réponses répétitives', icon: 'i-lucide-message-circle' },
  { value: 'ne-sait-pas', label: 'Je ne sais pas encore', icon: 'i-lucide-help-circle' }
]

const teamSizes = [
  { value: '1-5', label: '1 — 5 salariés', icon: 'i-lucide-user' },
  { value: '6-20', label: '6 — 20 salariés', icon: 'i-lucide-users' },
  { value: '21-50', label: '21 — 50 salariés', icon: 'i-lucide-building' },
  { value: '50+', label: '50+ salariés', icon: 'i-lucide-building-2' }
]

const aiExperiences = [
  { value: 'chatgpt', label: 'Oui, ChatGPT ou similaire', icon: 'i-lucide-bot' },
  { value: 'outils-metier', label: 'Oui, des outils métier automatisés', icon: 'i-lucide-cog' },
  { value: 'non', label: 'Non, c\'est nouveau pour moi', icon: 'i-lucide-sparkles' },
  { value: 'accompagnement', label: 'Je cherche quelqu\'un pour m\'accompagner', icon: 'i-lucide-handshake' }
]

const progressPercent = computed(() => Math.round((currentStep.value / totalSteps) * 100))

function canContinue(): boolean {
  if (currentStep.value === 1) return !!form.painPoint
  if (currentStep.value === 2) return !!form.teamSize
  if (currentStep.value === 3) return !!form.aiExperience
  return false
}

function nextStep() {
  if (currentStep.value < totalSteps && canContinue()) {
    currentStep.value++
  }
}

function prevStep() {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

function resetForm() {
  currentStep.value = 1
  form.painPoint = ''
  form.teamSize = ''
  form.aiExperience = ''
  form.company = ''
  form.fullName = ''
  form.email = ''
  form.phone = ''
}

function handleClose() {
  closeForm()
  setTimeout(resetForm, 300)
}

async function submitForm() {
  formLoading.value = true
  formError.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.fullName,
        email: form.email,
        company: form.company,
        sector: form.teamSize,
        task: form.painPoint,
        message: `Perte de temps : ${form.painPoint}\nTaille équipe : ${form.teamSize}\nExpérience IA : ${form.aiExperience}\nTéléphone : ${form.phone}`
      }
    })
    markSubmitted()
  } catch {
    const body = `Nom: ${form.fullName}%0AEntreprise: ${form.company}%0ATéléphone: ${form.phone}%0AEmail: ${form.email}%0APerte de temps: ${form.painPoint}%0AEquipe: ${form.teamSize}%0AExpérience IA: ${form.aiExperience}`
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
            <template v-for="link in navLinks" :key="link.label">
              <NuxtLink
                v-if="link.to.startsWith('/')"
                :to="link.to"
                class="text-sm text-white/50 hover:text-white transition-colors duration-300 link-animated"
              >
                {{ link.label }}
              </NuxtLink>
              <a
                v-else
                :href="link.to"
                class="text-sm text-white/50 hover:text-white transition-colors duration-300 link-animated"
              >
                {{ link.label }}
              </a>
            </template>
          </nav>

          <div class="flex items-center gap-3">
            <button
              class="hidden md:inline-flex px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm
                     rounded-xl font-medium transition-all duration-300
                     shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]
                     hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.6)]
                     hover:-translate-y-0.5 cursor-pointer"
              @click="openForm"
            >
              Nous contacter
            </button>
            <button
              class="md:hidden p-2 text-white/60 hover:text-white cursor-pointer"
              @click="mobileOpen = !mobileOpen"
              :aria-label="mobileOpen ? 'Fermer' : 'Menu'"
            >
              <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile drawer -->
    <div v-if="mobileOpen" role="dialog" aria-modal="true" aria-label="Menu de navigation" class="fixed inset-0 z-40 bg-[#050508]/95 backdrop-blur-xl pt-20 px-6 md:hidden">
      <nav class="flex flex-col gap-6">
        <template v-for="link in navLinks" :key="link.label">
          <NuxtLink
            v-if="link.to.startsWith('/')"
            :to="link.to"
            class="text-lg text-white/70 hover:text-white transition-colors link-animated"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <a
            v-else
            :href="link.to"
            class="text-lg text-white/70 hover:text-white transition-colors link-animated"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </a>
        </template>
        <button
          class="mt-4 text-center py-3 px-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold cursor-pointer
                 shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] transition-all duration-300"
          @click="mobileOpen = false; openForm()"
        >
          Nous contacter
        </button>
      </nav>
    </div>

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
                href="https://www.linkedin.com/company/nexoma-poitiers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Nexoma"
                class="w-9 h-9 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.06]
                       flex items-center justify-center text-white/40 hover:text-white transition-all duration-300"
              >
                <UIcon name="i-simple-icons-linkedin" class="text-base" />
              </a>
              <a
                href="https://x.com/nexoma_poitiers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter) Nexoma"
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
              <li><a href="tel:+33769801190" class="text-sm text-white/40 hover:text-emerald-400 transition-colors">07 69 80 11 90</a></li>
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

    <!-- Contact Form Modal — Multi-step -->
    <UModal v-model:open="showForm" :scrollable="true">
      <template #content>
        <div class="bg-[#0a0a0f]/95 backdrop-blur-xl rounded-2xl p-6 sm:p-8 w-full max-w-lg border border-white/[0.06]">
          <!-- Success state -->
          <div v-if="formSubmitted" class="text-center py-12">
            <div class="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
              <UIcon name="i-lucide-check" class="text-emerald-400 text-3xl" />
            </div>
            <h4 class="text-xl font-semibold text-white mb-2">Demande envoyee !</h4>
            <p class="text-white/50 mb-8">Nous vous recontactons sous 24h pour un diagnostic gratuit de vos process.</p>
            <button
              class="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl
                     font-medium transition-all duration-300 border border-white/10 cursor-pointer"
              @click="handleClose"
            >
              Fermer
            </button>
          </div>

          <!-- Multi-step form -->
          <div v-else>
            <!-- Header + close -->
            <div class="flex items-center justify-between mb-2">
              <p class="text-xs text-white/30 font-medium uppercase tracking-widest">Etape {{ currentStep }} / {{ totalSteps }}</p>
              <button
                class="text-white/40 hover:text-white transition-colors cursor-pointer p-1"
                @click="handleClose"
              >
                <UIcon name="i-lucide-x" class="text-xl" />
              </button>
            </div>

            <!-- Progress bar -->
            <div class="w-full h-1 bg-white/[0.06] rounded-full mb-8">
              <div
                class="h-full bg-emerald-500 rounded-full transition-all duration-500 ease-out"
                :style="{ width: progressPercent + '%' }"
              />
            </div>

            <!-- Step title -->
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-6">{{ stepTitles[currentStep - 1] }}</h3>

            <!-- Step 1 — Pain point -->
            <div v-if="currentStep === 1" class="space-y-3">
              <label
                v-for="opt in painPoints"
                :key="opt.value"
                class="flex items-center gap-4 px-4 py-4 rounded-xl cursor-pointer transition-all duration-300"
                :class="form.painPoint === opt.value
                  ? 'bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 shadow-[0_0_20px_-8px_rgba(16,185,129,0.3)]'
                  : 'bg-white/[0.03] border border-white/[0.08] text-white/60 hover:border-white/[0.15] hover:text-white/80 hover:bg-white/[0.05]'"
                @click="form.painPoint = opt.value"
              >
                <input type="radio" name="painPoint" :value="opt.value" v-model="form.painPoint" class="sr-only">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  :class="form.painPoint === opt.value ? 'bg-emerald-500/20' : 'bg-white/[0.05]'"
                >
                  <UIcon :name="opt.icon" class="text-lg" />
                </div>
                <span class="text-sm font-medium">{{ opt.label }}</span>
              </label>
            </div>

            <!-- Step 2 — Team size -->
            <div v-if="currentStep === 2" class="space-y-3">
              <label
                v-for="opt in teamSizes"
                :key="opt.value"
                class="flex items-center gap-4 px-4 py-4 rounded-xl cursor-pointer transition-all duration-300"
                :class="form.teamSize === opt.value
                  ? 'bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 shadow-[0_0_20px_-8px_rgba(16,185,129,0.3)]'
                  : 'bg-white/[0.03] border border-white/[0.08] text-white/60 hover:border-white/[0.15] hover:text-white/80 hover:bg-white/[0.05]'"
                @click="form.teamSize = opt.value"
              >
                <input type="radio" name="teamSize" :value="opt.value" v-model="form.teamSize" class="sr-only">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  :class="form.teamSize === opt.value ? 'bg-emerald-500/20' : 'bg-white/[0.05]'"
                >
                  <UIcon :name="opt.icon" class="text-lg" />
                </div>
                <span class="text-sm font-medium">{{ opt.label }}</span>
              </label>
            </div>

            <!-- Step 3 — AI experience -->
            <div v-if="currentStep === 3" class="space-y-3">
              <label
                v-for="opt in aiExperiences"
                :key="opt.value"
                class="flex items-center gap-4 px-4 py-4 rounded-xl cursor-pointer transition-all duration-300"
                :class="form.aiExperience === opt.value
                  ? 'bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 shadow-[0_0_20px_-8px_rgba(16,185,129,0.3)]'
                  : 'bg-white/[0.03] border border-white/[0.08] text-white/60 hover:border-white/[0.15] hover:text-white/80 hover:bg-white/[0.05]'"
                @click="form.aiExperience = opt.value"
              >
                <input type="radio" name="aiExperience" :value="opt.value" v-model="form.aiExperience" class="sr-only">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  :class="form.aiExperience === opt.value ? 'bg-emerald-500/20' : 'bg-white/[0.05]'"
                >
                  <UIcon :name="opt.icon" class="text-lg" />
                </div>
                <span class="text-sm font-medium">{{ opt.label }}</span>
              </label>
            </div>

            <!-- Step 4 — Contact info -->
            <form v-if="currentStep === 4" class="space-y-4" @submit.prevent="submitForm">
              <div>
                <label class="block text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Nom de l'entreprise</label>
                <input
                  v-model="form.company"
                  type="text"
                  placeholder="Votre entreprise"
                  class="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08]
                         text-white placeholder-white/25 text-sm
                         focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.06]
                         transition-all duration-300"
                >
              </div>
              <div>
                <label class="block text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Prenom et nom *</label>
                <input
                  v-model="form.fullName"
                  type="text"
                  required
                  placeholder="Jean Dupont"
                  class="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08]
                         text-white placeholder-white/25 text-sm
                         focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.06]
                         transition-all duration-300"
                >
              </div>
              <div>
                <label class="block text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Email *</label>
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
              <div>
                <label class="block text-xs text-white/50 uppercase tracking-wider mb-2 font-medium">Telephone *</label>
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

              <!-- Error -->
              <p v-if="formError" class="text-sm text-red-400">{{ formError }}</p>

              <!-- Submit -->
              <button
                type="submit"
                :disabled="formLoading"
                class="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl
                       font-semibold text-base cursor-pointer
                       shadow-[0_0_25px_-5px_rgba(16,185,129,0.4)]
                       hover:shadow-[0_0_35px_-5px_rgba(16,185,129,0.6)]
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-all duration-300"
              >
                <span v-if="formLoading" class="flex items-center justify-center gap-2">
                  <UIcon name="i-lucide-loader-2" class="animate-spin" />
                  Envoi en cours...
                </span>
                <span v-else>Envoyer ma demande</span>
              </button>

              <p class="text-xs text-white/25 text-center">
                Gratuit & sans engagement
              </p>
            </form>

            <!-- Navigation buttons (steps 1-3) -->
            <div v-if="currentStep < 4" class="flex items-center justify-between mt-8">
              <button
                v-if="currentStep > 1"
                class="flex items-center gap-1 text-sm text-white/40 hover:text-white/70 transition-colors cursor-pointer"
                @click="prevStep"
              >
                <UIcon name="i-lucide-arrow-left" class="text-base" />
                Retour
              </button>
              <div v-else />
              <button
                class="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl
                       font-semibold text-sm cursor-pointer
                       shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]
                       hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.6)]
                       transition-all duration-300
                       disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none"
                :disabled="!canContinue()"
                @click="nextStep"
              >
                Continuer
              </button>
            </div>

            <!-- Back button on step 4 -->
            <div v-if="currentStep === 4" class="mt-4">
              <button
                class="flex items-center gap-1 text-sm text-white/40 hover:text-white/70 transition-colors cursor-pointer"
                @click="prevStep"
              >
                <UIcon name="i-lucide-arrow-left" class="text-base" />
                Retour
              </button>
            </div>
          </div>
        </div>
      </template>
    </UModal>
  </UApp>
</template>
