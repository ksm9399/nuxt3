<template>
  <NuxtPage />
</template>

<script setup lang="ts">
// admin 중첩라우팅 통해서 admin관련 모든 페이지에 admin-only 미들웨어 적용
definePageMeta({
  middleware: ['admin-only']
})
</script>

<style scoped>

</style>