<template>
  <q-card class="my-card" @click="$emit('click')">
    <img :src="course.thumbnail" />

    <q-card-section>
      <div class="text-h6 ellipsis">{{ course.title }}</div>
      <div class="text-subtitle2 ellipsis text-grey-8">
        {{ course.subtitle }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import type { CourseWithPath } from '~/types/course';

interface Props {
  course: CourseWithPath
}

defineProps<Props>()

defineEmits<{
  click: [];
}>();
</script>