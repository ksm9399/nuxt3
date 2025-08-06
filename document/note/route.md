# NUXT3 파일기반 라우팅

### Nuxt 라우트의 실행 단계
1. 정적라우트
2. 동적 라우트
3. catch-all 라우트

### 정적 라우트
```
pages폴더 하위의 파일명을 기반으로 라우트
-| pages/
  -| index.vue         -> /
  -| login.vue         -> /login
    -| user/
      -| index.vue     -> /user
      -| profile.vue   -> /user/profile
```

### 동적 라우트
```
같은 레이아웃(컴포넌트 구조) + 다른 데이터를 보여줘야 할 때 사용
-| pages/
  -| index.vue         -> /
  -| login.vue         -> /login
    -| user/
      -| index.vue     -> /user
      -| [profile].vue   -> /user/[profile]
```
> #### 유저 프로필의 경우 같은 컴포넌트를 사용하지만 유저마다 데이터가 다름 (동적 처리)

### Catch-all route
```
그 외, 정적 라우트 및 동적 라우트 요청이 아닌 라우트 요청 Catch-all route
[...slug].vue
```
> #### 예를 들어 /edu/editor url 요청이 들어왔을때 pages하위에 edu/editor.vue가 존재하지 않으므로 [...slug].vue 가 실행이 된다.