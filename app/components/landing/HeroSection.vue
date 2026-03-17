<script setup lang="ts">
const { openForm } = useContactForm()
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Mesh gradient background -->
    <div class="absolute inset-0 hero-gradient" />
    <div class="absolute inset-0 bg-dots opacity-30" />

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
      <!-- Badge -->
      <div
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full
               bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-8"
        data-reveal
      >
        <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        Nouveau — Agents IA pour PME
      </div>

      <!-- Headline -->
      <h1
        class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[0.9] text-white mb-6"
        data-reveal
        data-reveal-delay="1"
      >
        Votre équipe IA<br>
        <span class="gradient-text">sur-mesure</span>
      </h1>

      <!-- Subheadline -->
      <p
        class="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        data-reveal
        data-reveal-delay="2"
      >
        Devis en 2 minutes, relances automatiques, accueil 24/7.
        Nos agents IA font le travail de 3 employés — sans pause café.
      </p>

      <!-- CTA group -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        data-reveal
        data-reveal-delay="3"
      >
        <button
          class="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white
                 rounded-xl font-semibold text-lg glow-button cursor-pointer"
          @click="openForm"
        >
          Réserver un appel gratuit →
        </button>
        <a
          href="#solution"
          class="px-8 py-4 bg-white/5 hover:bg-white/10 text-white
                 rounded-xl font-medium text-lg transition-all duration-300
                 border border-white/10 hover:border-white/20"
        >
          Découvrir nos agents
        </a>
      </div>

      <!-- Social proof -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/40"
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
        <div class="flex items-center gap-4">
          <span>+200 PME accompagnées</span>
          <span class="hidden sm:inline text-white/20">|</span>
          <div class="flex items-center gap-1">
            <span class="text-amber-400">★★★★★</span>
            <span>4.9/5</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
      <span class="text-xs uppercase tracking-widest">Scroll</span>
      <div class="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
    </div>

  </section>
</template>
