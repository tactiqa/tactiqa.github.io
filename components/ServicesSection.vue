<script setup>
import { ref } from 'vue';
import ServiceCard from '~/components/ServiceCard.vue';

// Import services data from JSON file
import servicesData from '~/data/services.json';

// Convert to ref to make it reactive
const services = ref(servicesData);
</script>

<template>
  <section id="services" class="py-12 w-full bg-gray-100">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
          My Services
        </h2>
        <p class="text-sm text-gray-500 max-w-2xl mx-auto">
          Comprehensive testing and quality assurance solutions
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard 
          v-for="service in services" 
          :key="service.id"
          :service="service"
        />
      </div>
    </div>
  </section>
</template>
