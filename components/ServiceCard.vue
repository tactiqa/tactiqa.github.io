<script setup>
const props = defineProps({
  service: {
    type: Object,
    required: true,
    default: () => ({
      id: null,
      icon: '',
      title: '',
      description: '',
      items: []
    })
  }
});
</script>

<template>
  <div class="h-full flex flex-col p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1" 
       :style="{ background: 'linear-gradient(145deg, #ffffff 0%, #f3f4f6 50%, #e5e7eb 100%)' }">
    <div class="flex-1">
      <div class="text-3xl mb-4">
        {{ service.icon }}
      </div>
      
      <h3 class="text-lg font-bold mb-2 text-gray-900">
        {{ service.title }}
      </h3>
      
      <p class="text-sm text-gray-600 mb-4">
        {{ service.description }}
      </p>
      
      <div v-if="!service.items || service.items.length === 0" class="text-sm text-yellow-600">
        No items available for this service
      </div>
      
      <ul v-else class="space-y-2 mt-4">
        <li 
          v-for="(item, index) in service.items" 
          :key="index" 
          class="flex items-start text-sm"
        >
          <span class="mr-2 text-primary">•</span>
          <span class="text-gray-600">
            <span v-if="typeof item === 'string'">
              {{ item }}
            </span>
            <template v-else>
              <span v-if="item.title" class="font-medium text-gray-900">{{ item.title }}:</span>
              {{ item.description || '' }}
            </template>
          </span>
        </li>
      </ul>
    </div>
    
    <div class="mt-6 flex justify-center">
      <UButton 
        color="neutral" 
        variant="solid" 
        class="px-6 transition-transform duration-200 hover:scale-110"
      >
        Learn More
      </UButton>
    </div>
  </div>
</template>
