import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

app.listen({ port: 3000 }).then(() => {
  console.warn("Bugs' server started at http://localhost:3000/")
})
