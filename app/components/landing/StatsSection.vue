<script setup lang="ts">
const stats = [
  { value: 207, label: 'PME transformées', suffix: '+', decimals: 0 },
  { value: 47, label: 'économisés par client / an', suffix: 'K EUR', decimals: 0 },
  { value: 21, label: 'jours pour les premiers résultats', suffix: 'j', decimals: 0 },
  { value: 94, label: 'de taux de rétention client', suffix: '%', decimals: 0 }
]

const counters = stats.map(s => useCountUp(s.value, 2500, s.decimals))
const sectionVisible = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

// Moving gradient offset
const gradientOffset = ref(0)
let animFrame: number | null = null

const animateGradient = () => {
  gradientOffset.value = (gradientOffset.value + 0.3) % 360
  animFrame = requestAnimationFrame(animateGradient)
}

onMounted(() => {
  if (!sectionRef.value) return

  animateGradient()

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !sectionVisible.value) {
        sectionVisible.value = true
        counters.forEach((c, i) => {
          setTimeout(() => c.animate(), i * 200)
        })
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.3 })
  observer.observe(sectionRef.value)
})

onUnmounted(() => {
  if (animFrame) cancelAnimationFrame(animFrame)
})
</script>

<template>
  <section ref="sectionRef" class="relative py-28 md:py-40 overflow-hidden">
    <!-- Animated gradient background -->
    <div
      class="absolute inset-0 opacity-30 transition-opacity duration-1000"
      :style="{
        background: `
          radial-gradient(ellipse 80% 50% at ${50 + Math.sin(gradientOffset * 0.02) * 20}% ${50 + Math.cos(gradientOffset * 0.015) * 15}%, rgba(16, 185, 129, 0.15), transparent),
          radial-gradient(ellipse 60% 40% at ${30 + Math.sin(gradientOffset * 0.025) * 15}% ${60 + Math.cos(gradientOffset * 0.02) * 10}%, rgba(59, 130, 246, 0.08), transparent)
        `
      }"
    />
    <div class="absolute inset-0 bg-noise" />

    <!-- Top/bottom edge lines -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section label -->
      <div class="text-center mb-12" data-reveal>
        <p class="text-sm text-emerald-400 uppercase tracking-widest font-medium">Des résultats, pas des promesses</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="text-center group"
          data-reveal
          :data-reveal-delay="index + 1"
        >
          <!-- Animated number -->
          <div class="relative mb-4">
            <div
              class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tabular-nums leading-none"
            >
              {{ counters[index].displayValue.value }}<span class="text-emerald-400 text-3xl md:text-4xl lg:text-5xl">{{ stat.suffix }}</span>
            </div>
            <!-- Glow under number -->
            <div
              class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-emerald-500/20 rounded-full blur-xl transition-opacity duration-500"
              :class="sectionVisible ? 'opacity-100' : 'opacity-0'"
            />
          </div>

          <!-- Label -->
          <div class="text-sm md:text-base text-white/40 uppercase tracking-wider">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
