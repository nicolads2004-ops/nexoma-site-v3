<script setup lang="ts">
const { openForm } = useContactForm()

// Typing effect
const typingTexts = [
  'on optimise ce qui vous ralentit.',
  'on automatise ce qui vous coûte.',
  'on libère ce qui vous bloque.'
]
const currentTextIndex = ref(0)
const displayedText = ref('')
const isDeleting = ref(false)
const typingSpeed = ref(80)

const typeEffect = () => {
  const fullText = typingTexts[currentTextIndex.value]

  if (!isDeleting.value) {
    displayedText.value = fullText.substring(0, displayedText.value.length + 1)
    typingSpeed.value = 80

    if (displayedText.value === fullText) {
      typingSpeed.value = 2500
      isDeleting.value = true
    }
  } else {
    displayedText.value = fullText.substring(0, displayedText.value.length - 1)
    typingSpeed.value = 40

    if (displayedText.value === '') {
      isDeleting.value = false
      currentTextIndex.value = (currentTextIndex.value + 1) % typingTexts.length
      typingSpeed.value = 300
    }
  }

  setTimeout(typeEffect, typingSpeed.value)
}

// Counter animations
const counterPME = useCountUp(200, 2500)
const counterHeures = useCountUp(47, 2000)
const counterROI = useCountUp(4.9, 2000, 1)
const statsVisible = ref(false)

const onStatsVisible = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !statsVisible.value) {
      statsVisible.value = true
      counterPME.animate()
      counterHeures.animate()
      counterROI.animate()
    }
  })
}

// Particles
const particles = ref<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([])

onMounted(() => {
  typeEffect()

  // Generate particles
  particles.value = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 4
  }))

  // Stats observer
  const statsEl = document.querySelector('#hero-stats')
  if (statsEl) {
    const observer = new IntersectionObserver(onStatsVisible, { threshold: 0.3 })
    observer.observe(statsEl)
  }
})
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Mesh gradient background -->
    <div class="absolute inset-0 hero-gradient" />
    <div class="absolute inset-0 bg-dots opacity-30" />

    <!-- Particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        v-for="p in particles"
        :key="p.id"
        class="absolute rounded-full bg-emerald-400/20 animate-particle"
        :style="{
          left: p.x + '%',
          top: p.y + '%',
          width: p.size + 'px',
          height: p.size + 'px',
          animationDelay: p.delay + 's',
          animationDuration: p.duration + 's'
        }"
      />
    </div>

    <!-- Floating glow orbs -->
    <div
      class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] animate-float"
    />
    <div
      class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] animate-float"
      style="animation-delay: -3s;"
    />
    <div
      class="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-violet-500/5 rounded-full blur-[100px] animate-glow"
    />

    <!-- Content -->
    <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
      <!-- Urgency Badge -->
      <div
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full
               bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-8 animate-pulse-subtle"
        data-reveal
      >
        <span class="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
        ⚠ En 2026, les PME qui n'optimisent pas disparaissent
      </div>

      <!-- Headline -->
      <h1
        class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1] text-white mb-6"
        data-reveal
        data-reveal-delay="1"
      >
        Votre entreprise, mais en mieux :<br>
        <span class="gradient-text inline-block min-h-[1.1em]">
          {{ displayedText }}<span class="animate-blink text-emerald-400">|</span>
        </span>
      </h1>

      <!-- Subheadline -->
      <p
        class="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-4 leading-relaxed"
        data-reveal
        data-reveal-delay="2"
      >
        On analyse votre entreprise, on identifie ce qui vous coûte du temps et de l'argent,
        et on met en place <span class="text-white font-semibold">des solutions IA sur-mesure</span>
        qui travaillent pour vous — <span class="text-red-400 font-semibold">24h/24</span>, sans erreur, sans congés.
      </p>

      <!-- Guarantee line -->
      <p
        class="text-sm text-emerald-400 font-medium mb-10"
        data-reveal
        data-reveal-delay="2"
      >
        Résultats mesurables en 21 jours ou remboursé intégralement. Zéro risque.
      </p>

      <!-- CTA group -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        data-reveal
        data-reveal-delay="3"
      >
        <button
          class="group relative px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white
                 rounded-xl font-semibold text-lg glow-button cursor-pointer animate-pulse-glow"
          @click="openForm"
        >
          <span class="relative z-10">Réserver mon diagnostic gratuit →</span>
        </button>
        <a
          href="#solution"
          class="px-8 py-4 bg-white/5 hover:bg-white/10 text-white
                 rounded-xl font-medium text-lg transition-all duration-300
                 border border-white/10 hover:border-white/20"
        >
          Voir ce qu'on a fait pour d'autres
        </a>
      </div>

      <!-- Social proof with counters -->
      <div
        id="hero-stats"
        class="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-white/40"
        data-reveal
        data-reveal-delay="4"
      >
        <!-- Avatar stack -->
        <div class="flex -space-x-3">
          <div
            v-for="i in 5"
            :key="i"
            class="w-10 h-10 rounded-full border-2 border-[#050505] bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-xs font-bold"
          >
            {{ ['NB', 'LR', 'MC', 'JP', 'SA'][i-1] }}
          </div>
        </div>
        <div class="flex items-center gap-6">
          <div class="text-center">
            <span class="text-2xl font-bold text-white tabular-nums">{{ counterPME.displayValue.value }}+</span>
            <span class="block text-xs text-white/40">entreprises optimisées</span>
          </div>
          <span class="hidden sm:inline text-white/10">|</span>
          <div class="text-center">
            <span class="text-2xl font-bold text-white tabular-nums">{{ counterHeures.displayValue.value }}K EUR</span>
            <span class="block text-xs text-white/40">économisés / an en moyenne</span>
          </div>
          <span class="hidden sm:inline text-white/10">|</span>
          <div class="flex items-center gap-1">
            <span class="text-amber-400">★★★★★</span>
            <span class="text-2xl font-bold text-white tabular-nums">{{ counterROI.displayValue.value }}</span>
            <span class="text-white/40">/5</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
      <span class="text-xs uppercase tracking-widest">Scroll</span>
      <div class="w-px h-8 bg-gradient-to-b from-white/20 to-transparent animate-scroll-hint" />
    </div>
  </section>
</template>

<style scoped>
@keyframes particle-float {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
  50% { transform: translateY(-30px) scale(1.5); opacity: 0.8; }
}
.animate-particle {
  animation: particle-float ease-in-out infinite;
}
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
.animate-blink {
  animation: blink 0.8s step-end infinite;
}
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 30px -5px rgba(16, 185, 129, 0.4); }
  50% { box-shadow: 0 0 60px -5px rgba(16, 185, 129, 0.7); }
}
.animate-pulse-glow {
  animation: pulse-glow 2.5s ease-in-out infinite;
}
@keyframes pulse-subtle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
.animate-pulse-subtle {
  animation: pulse-subtle 3s ease-in-out infinite;
}
@keyframes scroll-hint {
  0% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
  51% { transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}
.animate-scroll-hint {
  animation: scroll-hint 2s ease-in-out infinite;
}
</style>
