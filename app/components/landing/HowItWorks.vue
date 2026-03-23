<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Diagnostic offert (30 min)',
    description: 'On analyse vos process, vos outils, votre organisation. On identifie où vous perdez du temps et de l\'argent. Vous repartez avec un plan d\'action concret — gratuit, sans engagement, et il est à vous même si vous ne signez pas.',
    icon: 'i-lucide-scan',
    detail: 'Audit complet de vos flux de travail',
    duration: 'Jour 1'
  },
  {
    number: '02',
    title: 'Mise en place sur-mesure',
    description: 'On construit les solutions adaptées à votre entreprise : vos données, vos process, votre façon de travailler. Pas de solution générique. Tout est calibré sur votre réalité métier.',
    icon: 'i-lucide-settings',
    detail: 'Entraînement sur vos données métier',
    duration: 'Semaine 1-2'
  },
  {
    number: '03',
    title: 'Résultats garantis',
    description: 'Déploiement, formation de votre équipe en 1h, et suivi en temps réel. Vous voyez les résultats dès les premières semaines. Et si ce n\'est pas le cas, on vous rembourse.',
    icon: 'i-lucide-rocket',
    detail: 'ROI mesurable garanti',
    duration: 'Semaine 3'
  }
]

// Animated line and step counters
const sectionVisible = ref(false)
const lineProgress = ref(0)
const activeStep = ref(-1)
const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!sectionRef.value) return
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !sectionVisible.value) {
        sectionVisible.value = true
        // Animate line drawing
        let progress = 0
        const lineInterval = setInterval(() => {
          progress += 2
          lineProgress.value = Math.min(progress, 100)
          if (progress >= 100) clearInterval(lineInterval)
        }, 20)
        // Stagger step reveals
        steps.forEach((_, i) => {
          setTimeout(() => { activeStep.value = i }, 400 + i * 600)
        })
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.2 })
  observer.observe(sectionRef.value)
})
</script>

<template>
  <section id="comment" class="relative py-24 md:py-32 overflow-hidden">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <LandingSectionHeader
        eyebrow="On s'occupe de tout"
        title="De l'analyse aux résultats en "
        highlight="21 jours."
        description="Pas de projet IT de 6 mois. Pas de développeur à embaucher. On vient, on comprend votre métier, on met en place les solutions et on forme votre équipe. Simple."
      />

      <div ref="sectionRef" class="relative">
        <!-- Animated connecting line (desktop) -->
        <div class="hidden lg:block absolute top-24 left-[16.66%] right-[16.66%] h-px overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-emerald-500/50 via-emerald-400/50 to-emerald-500/50 transition-all duration-1000 ease-out origin-left"
            :style="{ width: lineProgress + '%' }"
          />
        </div>

        <!-- Animated connecting line (mobile) - hidden since steps are centered -->
        <div class="hidden absolute top-0 bottom-0 left-8 w-px overflow-hidden">
          <div
            class="w-full bg-gradient-to-b from-emerald-500/50 via-emerald-400/50 to-emerald-500/50 transition-all duration-1500 ease-out origin-top"
            :style="{ height: lineProgress + '%' }"
          />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div
            v-for="(step, index) in steps"
            :key="step.number"
            class="relative text-center pl-0"
            :class="activeStep >= index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            style="transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);"
          >
            <!-- Step circle -->
            <div class="relative mx-auto mb-8">
              <div
                class="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto transition-all duration-500"
                :class="activeStep >= index
                  ? 'bg-emerald-500/20 border border-emerald-500/40 shadow-lg shadow-emerald-500/10'
                  : 'bg-emerald-500/5 border border-emerald-500/10'"
              >
                <UIcon :name="step.icon" class="text-emerald-400 text-2xl" />
              </div>
              <!-- Step number badge -->
              <div
                class="absolute -top-2 -right-2 w-8 h-8 rounded-full text-white
                       text-xs font-bold flex items-center justify-center transition-all duration-500"
                :class="activeStep >= index
                  ? 'bg-emerald-500 scale-100'
                  : 'bg-emerald-500/30 scale-75'"
              >
                {{ step.number }}
              </div>
            </div>

            <!-- Duration badge -->
            <div
              class="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-4 transition-all duration-500"
              :class="activeStep >= index ? 'opacity-100' : 'opacity-0'"
            >
              {{ step.duration }}
            </div>

            <h3 class="text-xl font-semibold text-white mb-3">{{ step.title }}</h3>
            <p class="text-white/50 leading-relaxed max-w-sm mx-auto mb-4 text-sm">{{ step.description }}</p>

            <!-- Detail tag -->
            <div
              class="inline-flex items-center gap-1.5 text-xs text-emerald-400/70"
            >
              <UIcon name="i-lucide-check-circle" class="text-sm" />
              {{ step.detail }}
            </div>
          </div>
        </div>

        <!-- Confidence builder -->
        <div
          class="mt-16 text-center"
          :class="activeStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          style="transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); transition-delay: 0.3s;"
        >
          <!-- Mobile: stack vertical -->
          <div class="sm:hidden glass-card rounded-2xl px-6 py-5 max-w-xs mx-auto space-y-3">
            <div class="flex items-center gap-2.5">
              <UIcon name="i-lucide-shield-check" class="text-emerald-400 text-lg flex-shrink-0" />
              <span class="text-white/60 text-sm">Garanti sans risque</span>
            </div>
            <div class="h-px bg-white/[0.06]" />
            <div class="flex items-center gap-2.5">
              <UIcon name="i-lucide-lock" class="text-emerald-400 text-lg flex-shrink-0" />
              <span class="text-white/60 text-sm">Vos données restent vôtres</span>
            </div>
            <div class="h-px bg-white/[0.06]" />
            <div class="flex items-center gap-2.5">
              <UIcon name="i-lucide-heart-handshake" class="text-emerald-400 text-lg flex-shrink-0" />
              <span class="text-white/60 text-sm">Accompagnement humain</span>
            </div>
          </div>
          <!-- Desktop: horizontal -->
          <div class="hidden sm:inline-flex items-center gap-6 glass-card rounded-2xl px-8 py-5">
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-shield-check" class="text-emerald-400 text-lg" />
              <span class="text-white/60 text-sm">Garanti sans risque</span>
            </div>
            <div class="w-px h-6 bg-white/10" />
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-lock" class="text-emerald-400 text-lg" />
              <span class="text-white/60 text-sm">Vos données restent vôtres</span>
            </div>
            <div class="w-px h-6 bg-white/10" />
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-heart-handshake" class="text-emerald-400 text-lg" />
              <span class="text-white/60 text-sm">Accompagnement humain</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.duration-1500 {
  transition-duration: 1500ms;
}
</style>
