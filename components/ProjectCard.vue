<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="rounded-lg border bg-card p-4 shadow-sm hover:shadow-lg transition-shadow">
    <h3 class="text-base font-semibold mb-1">{{ title }}</h3>
    <p class="text-xs text-muted-foreground">{{ description }}</p>

    <UButton color="neutral">Button</UButton>
  </div>
</template>
