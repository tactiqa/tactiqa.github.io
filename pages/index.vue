<script setup lang="ts">
// Import components
import HeroSection from '~/components/HeroSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
// import ProjectsSection from '~/components/ProjectsSection.vue'
// import TypographySection from '~/components/TypographySection.vue'
import ContactForm from '~/components/ContactForm.vue'

// Page configuration
useHead({
  title: 'Portfolio - QA',
  meta: [
    { name: 'description', content: 'My QA Portfolio' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <HeroSection />
    <ServicesSection />
    <ProjectsSection />
    <!-- <TypographySection /> -->
    <ContactForm />
  </div>
</template>

<style scoped>
/* Add any custom styles here if needed */
</style>
