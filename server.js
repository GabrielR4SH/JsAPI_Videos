import { fastify } from "fastify";

const server = fastify();

server.get('/', () => {
    return 'Hello World';
});

server.get('/get', () => {
    return 'Kendric';
});

server.get('/kendric', () => {
    return 'get';
});

server.listen({
    port: 3333
});