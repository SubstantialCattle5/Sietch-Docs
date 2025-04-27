<template>
    <div class="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        :class="['w-8 h-8', colorClass]"
        aria-hidden="true"
      >
        <g>
          <!-- Outer Circle -->
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="currentColor"
            stroke-width="4"
            fill="none"
          />
  
          <!-- Inner Structure -->
          <path d="M50 20 L65 50 L50 80 L35 50 Z" fill="currentColor" />
  
          <!-- Central Dot -->
          <circle cx="50" cy="50" r="5" :fill="isDark ? '#333' : 'white'" />
        </g>
      </svg>
      <span class="font-bold text-lg">Sietch</span>
    </div>
  </template>
  
  <script setup>
  // Logo component for Sietch, minimalistic and symbolic
  const colorMode = useColorMode()
  const isDark = computed(() => colorMode.value === 'dark')
  const colorClass = computed(() => isDark.value ? 'svg-dark' : 'svg-light')
  </script>
  
  <style scoped>
  .svg-light {
    color: black;
  }
  .svg-dark {
    color: white;
  }
  </style>
  