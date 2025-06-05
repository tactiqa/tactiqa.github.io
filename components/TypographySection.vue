<script setup>
// No props needed for this component
</script>

<template>
  <section class="py-8 w-full bg-gray-50 border-t">
    <div class="container mx-auto px-4">
      <h2 class="text-xl font-bold tracking-tighter sm:text-2xl mb-6 text-center">Typography Preview</h2>
      
      <!-- Roboto -->
      <div class="mb-8">
        <h3 class="text-lg font-bold tracking-tight sm:text-xl mb-3">Roboto</h3>
        <div class="space-y-2 bg-white p-4 rounded-lg shadow-sm">
          <p class="text-xs"><span class="font-thin">Thin (100):</span> The quick brown fox jumps over the lazy dog</p>
          <p class="text-xs"><span class="font-light">Light (300):</span> The quick brown fox jumps over the lazy dog</p>
          <p class="text-xs"><span class="font-normal">Regular (400):</span> The quick brown fox jumps over the lazy dog</p>
          <p class="text-xs"><span class="font-medium">Medium (500):</span> The quick brown fox jumps over the lazy dog</p>
          <p class="text-xs"><span class="font-bold">Bold (700):</span> The quick brown fox jumps over the lazy dog</p>
          <p class="text-xs"><span class="font-black">Black (900):</span> The quick brown fox jumps over the lazy dog</p>
          <p class="text-xs italic"><span class="font-normal">Italic:</span> The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
      
      <!-- Roboto Mono -->
      <div class="mb-8">
        <h3 class="text-lg font-bold tracking-tight sm:text-xl mb-3">Roboto Mono</h3>
        <div class="space-y-2 font-mono bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <p class="text-xs"><span class="font-thin">Thin (100):</span> The quick brown fox jumps over the lazy dog</p>
          <p class="text-xs"><span class="font-light">Light (300):</span> The quick brown fox jumps over the lazy dog</p>
          <p class="text-xs"><span class="font-normal">Regular (400):</span> The quick brown fox jumps over the lazy dog</p>
          <p class="text-xs"><span class="font-medium">Medium (500):</span> The quick brown fox jumps over the lazy dog</p>
          <p class="text-xs"><span class="font-bold">Bold (700):</span> The quick brown fox jumps over the lazy dog</p>
          <p class="text-xs italic"><span class="font-normal">Italic:</span> The quick brown fox jumps over the lazy dog</p>
        </div>
      </div>
    </div>
  </section>
</template>
