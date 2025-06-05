<script setup>
const scrollToTop = (e, item) => {
  if (item.toLowerCase() === 'home') {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Update URL without adding a hash
    if (window.history.pushState) {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  }
};
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
    <div class="container mx-auto px-4 py-3 max-w-7xl">
      <nav class="flex items-center justify-between">
        <div class="text-xl font-bold text-primary">
          <a 
            href="#" 
            class="hover:text-secondary transition-colors"
            @click="(e) => scrollToTop(e, 'home')"
          >
            strataQA
          </a>
        </div>
        <div class="flex items-center space-x-1">
          <a 
            v-for="item in ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact']" 
            :key="item"
            :href="item.toLowerCase() === 'home' ? '#' : '#' + item.toLowerCase()"
            class="px-4 py-2 text-sm font-medium rounded-md transition-colors"
            :class="{
              'text-primary': $route.hash === '#' + item.toLowerCase(),
              'text-gray-600': $route.hash !== '#' + item.toLowerCase(),
              'hover:bg-gray-100 hover:text-primary': true,
              'transition-colors': true
            }"
            @click="(e) => scrollToTop(e, item)"
          >
            {{ item }}
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>
