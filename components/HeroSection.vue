<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Elevate Your Software Quality with Expert QA Consultancy'
  },
  subtitle: {
    type: String,
    default: "Delivering unparalleled quality assurance strategies and solutions for robust, reliable, and high-performing software."
  }
});
</script>

<template>
  <section class="py-12 w-full bg-gray-50">
    <div class="container mx-auto px-4">
      <h1 class="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4 text-center">
        {{ title }}
      </h1>
      <p class="text-sm text-center max-w-2xl mx-auto text-muted-foreground">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>
