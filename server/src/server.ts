import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import 'dotenv/config';
import fastify from 'fastify';
import { authRoutes } from './routes/auth';
import { memoriesRoutes } from './routes/memories';

const app = fastify();
app.register(cors, {
  origin: '*',
});
app.register(jwt, {
  secret: process.env.JWT_SECRET as string,
});
app.register(memoriesRoutes);
app.register(authRoutes);

app.listen({ port: 3333 }).then(() => {
  console.warn("Bugs' server started at http://localhost:3333/");
});
