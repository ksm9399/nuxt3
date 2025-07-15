<template>
  <div class="title">vue & nuxt mastery class</div>
  <div class="nav-toolbar">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
  </div>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.nav-toolbar a {
  margin-right: 10px;
}
</style>

