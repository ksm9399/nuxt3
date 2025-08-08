<template>
  <NuxtLayout>
    <!--
      NuxtPage - path가 변경되었을때 다시 렌더링됨
      *** 기본적으로 NuxtPage는 쿼리파라미터가 추가 및 변경되면 렌더링이 안됨
    -->
    <div>NuxtPage</div>
    <NuxtPage />
    <!-- RouterView - 컴포넌트가 렌더링될때 한번만 렌더링됨 -->
    <!-- <div>RouterView</div>
    <RouterView /> -->
  </NuxtLayout>
</template>

<script setup lang="ts">

</script>