import Fastify from 'fastify';

const app = Fastify();

app.get('/', () => {
  return 'Hello World!';
});

app.listen({
  port: 2222
}, () => console.log('server is running'));
