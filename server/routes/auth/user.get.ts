export default defineEventHandler((event) => {
  const user = event.context.user // getUserFromEvent(event)

  if (!user) return {user: null}

  return {
    user,
  }
})