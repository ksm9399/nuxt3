export default defineEventHandler((event) => {
  const user = getUserFromEvent(event)

  console.log(`middeware user:`, user)
  if (user) {
    event.context.user = user
  }
})