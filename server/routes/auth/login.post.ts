import { getUserByEmail } from "~/server/models/user"

export default defineEventHandler(async (event) => {
  const body = readBody<{email: string, password: string}>(event)

  const {email, password} = await body

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: `email address and password are required`,
    })
  }

  const userWithPassword = getUserByEmail(email)
  console.log('userWithPassword')
  console.log(userWithPassword)
  if (!userWithPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: `Bad credentials`
    })
  }

  const verified = verifyPassword(password, userWithPassword.password)
  if (!verified) {
    throw createError({
      statusCode: 401,
      statusMessage: `Bad credentials`
    })
  }

  const {password: _password, ...userWithOutPassword} = userWithPassword

  setCookie(event, '_user', JSON.stringify(userWithOutPassword))

  return {
    user: userWithOutPassword
  }
})