<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <PageTitle title="About" />
      <PageDescription description="Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다." />
      <div class="column">
        <!-- 라우터링크 내부페이지로 이동 -->
        <RouterLink to="/">RouterLink Home</RouterLink>
        <RouterLink to="https://youtube.com/@gymcoding">RouterLink Youtube</RouterLink>
        <br />
        <NuxtLink to="/">NuxtLink Home</NuxtLink>
        <NuxtLink to="https://youtube.com/@gymcoding">NuxtLink Youtube</NuxtLink>

        <div class="q-gutter-y-sm q-mt-md">
          <div class="text-subtitle1 text-weight-bold">useState('counter')</div>
          <div>
            counter: {{ counter }}
            <q-btn label="counter" color="primary" dense no-caps @click="counter++" />
          </div>
          <div>
            sameCounter: {{ sameCounter }}
            <q-btn label="sameCounter" color="primary" dense no-caps @click="sameCounter++" />
          </div>
          <div>
            <q-btn label="clear" @click="clearNuxtState()" />
          </div>
        </div>

        <div class="q-gutter-y-sm q-mt-md">
          <div class="text-subtitle1 text-weight-bold">useCounterStore('counter')</div>
          <div>count: {{ count }}</div>
          <div>doubleCount: {{ doubleCount }}</div>
          <div>
            <q-btn label="increment" @click="counterStore.increment()" />
            <q-btn label="clear" color="red" @click="counterStore.clear()" />
          </div>
        </div>

        <div class="q-gutter-y-sm q-mt-md">
          <div class="text-subtitle1 text-weight-bold">local vs session storage</div>
          <q-input v-model="localStorageColor" outlined></q-input>
          <q-input v-model="sessionStorageColor" outlined></q-input>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const counter = useState<number>('counter', () => 1)
const sameCounter = useState<number>('counter', () => 1)

const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)

const localStorageColor = useLocalStorage('color-key', null)  // 사용자가 직접 값을 삭제하지 않는한 지워지지 않음
const sessionStorageColor = useSessionStorage('color-key', null)  // 브라우저 종료시 지워짐
</script>