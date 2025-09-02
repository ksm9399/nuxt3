// 포괄 경로

/*
  캐치올 라우트
  ex> /api/foo/bar/baz path가 있다고 가정
  event.context.path 라우트 경로 가져오기 '/api/foo/bar/baz'
  event.context.params._ 라우트 세그먼트로 가져오기 'bar/baz'

  만약 이름을 지정한다고하면
  server/api/foo/[...slug].ts
  event.context.params.slug를 통해 액세스 가능
*/
export default defineEventHandler(() => {
  throw createError({
    statusCode: 404,
    statusMessage: `not found`
  })
})