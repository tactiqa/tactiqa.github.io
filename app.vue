<template>
  <UApp :ui="{ strategy: 'override' }">
    <Header />
    <main class="pt-16">
      <NuxtPage />
    </main>
  </UApp>
</template>

<script setup>
import Header from '~/components/Header.vue';
</script>