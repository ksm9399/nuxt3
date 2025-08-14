<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <!-- /courses 요청시 상위 디렉토리에 폴더명과 같은 파일이 있다면 parent컴포넌트로 인식 템플릿 랜더링 -->
      <div class="col-3">
        <q-card>
          <q-item-label header>강의 로드맵 {{ $hello('gym coding') }}</q-item-label>
          <q-list bordered separator>
            <q-item
              v-for="(course, index) in courses"
              :key="course.courseSlug"
              v-ripple
              clickable
              :to="course.path"
            >
              <q-item-section>
                {{ index + 1 }}. {{ course.title }}
              </q-item-section>
            </q-item>
            <q-item
              v-ripple
              clickable
              to="/courses/empty"
            >
              <q-item-section>
                Empty Course (throw error)
              </q-item-section>
            </q-item>
            <!-- <NuxtLink v-slot="{ navigate }" custom to="/courses/prefetching-1">
              <q-item clickable @click="navigate()">Prefetching Test 1</q-item>
            </NuxtLink>
            <NuxtLink v-slot="{ navigate }" custom to="/courses/prefetching-2">
              <q-item clickable @click="navigate()">Prefetching Test 2</q-item>
            </NuxtLink>
            <NuxtLink v-slot="{ navigate }" custom to="/courses/prefetching-3">
              <q-item clickable @click="navigate()">Prefetching Test 3</q-item>
            </NuxtLink> -->
          </q-list>
        </q-card>
      </div>
      <!-- /courses 폴더 하위에 있는 index.vue를 랜더링 함 -->
      <div class="col">
        <NuxtErrorBoundary>
          <NuxtPage />
          <template #error="{ error, clearError }">
            <div class="flex flex-center column q-py-xl">
              <div class="text-h6 q-mb-lg">
                {{ error }}

              </div>
              <q-btn
                label="Reset"
                color="positive"
                no-caps
                @click="clearError()"
              />
            </div>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const { courses } = useCourses();
</script>