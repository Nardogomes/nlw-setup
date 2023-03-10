import Fastify from 'fastify';
import cors from '@fastify/cors';

import { appRoutes } from './routes';

const app = Fastify();

app.register(cors);
app.register(appRoutes);

app.listen({
  port: 2222
}, () => console.log('server is running'));
