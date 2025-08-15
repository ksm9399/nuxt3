<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <PageTitle title="Admin Page" />
      <PageDescription description="Admin Layout 실습을 위한 페이지 입니다." />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import PageDescription from '~/components/PageDescription.vue';

definePageMeta({
  layout: 'admin',
});
</script>

<style scoped></style>