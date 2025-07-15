<template>
  <div>
    <div>
      All Courses
      <p>웹 개발 입문부처 심화까지</p>
    </div>
    <div v-for="n in 3" :key="n">
      <CourseCard />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>