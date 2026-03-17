<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  highlight?: string
  description?: string
  align?: 'center' | 'left'
}>()
</script>

<template>
  <div
    :class="[align === 'left' ? 'text-left' : 'text-center max-w-3xl mx-auto']"
    class="mb-16 md:mb-20"
    data-reveal
  >
    <div
      class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
             bg-emerald-500/10 border border-emerald-500/20 text-emerald-400
             text-xs uppercase tracking-[0.15em] font-medium mb-6"
    >
      {{ eyebrow }}
    </div>
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
      {{ title }}
      <span v-if="highlight" class="gradient-text">{{ highlight }}</span>
    </h2>
    <p
      v-if="description"
      class="text-lg text-white/50 leading-relaxed"
      :class="align !== 'left' && 'max-w-2xl mx-auto'"
    >
      {{ description }}
    </p>
  </div>
</template>
