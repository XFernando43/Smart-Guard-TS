<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Button from "primevue/button"
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <header class="text-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Hello App!</h1>
      <p class="text-gray-600 mt-2">
        <strong>Current route path:</strong> {{ $route.fullPath }}
      </p>
    </header>

    <nav class="flex flex-wrap justify-center gap-4 mb-10">
      <RouterLink to="/">
        <Button label="Home" class="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow" />
      </RouterLink>
      <RouterLink to="/about">
        <Button label="About" class="px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg shadow" />
      </RouterLink>
    </nav>

    <main class="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
