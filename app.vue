<template>
  <NuxtLayout>
    <!--
      NuxtPage - path가 변경되었을때 다시 렌더링됨
      *** 기본적으로 NuxtPage는 쿼리파라미터가 추가 및 변경되면 렌더링이 안됨
    -->
    <!-- <div>NuxtPage</div> -->
    <NuxtPage />
    <!-- RouterView - 컴포넌트가 렌더링될때 한번만 렌더링됨 -->
    <!-- <div>RouterView</div>
    <RouterView /> -->
  </NuxtLayout>
</template>

<script setup lang="ts">
/*
  nuxt.config.ts 에서 head 설정도 가능하지만  반응형 어려움
*/
const title = ref(`Vue & Nuxt Mastery Class`)
const description = ref(`짐코딩과 함께 Veu3 기초부터 실전, 활용! 그리고 Nuxt Framework까지 함께 배워보기!!`)
// useHead({
//   title,
//   meta: [
//     {name: 'description', content: description}
//   ]
// })

useSeoMeta({
  title,
  titleTemplate: (titleChunk) => {return titleChunk ? `${titleChunk} - 짐코딩 Vue & Nuxt 강의` : '짐코딩 Vue & Nuxt 강의'},
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogImage: '/img/og-image.png',
})
</script>