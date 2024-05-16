import { fastify } from "fastify";
import { DatabaseMemory } from "./database.js";

const server = fastify();
const database = new DatabaseMemory();

// GET,POST,PUT,DELETE,PATCH,HEAD
//Request Body
server.post('/videos', (request, reply) => {
    const body = request.body
    console.log(body);

    database.create({
        title: 'Video 01',
        description: 'Esse vídeo é 01',
        duration: 100
    });
    
    return reply().status(201).send()
});

server.get('/videos', () => {
    return 'My Videos';
});

//Route Parameter
server.put('/videos/:id', () => {
    return 'id';
});

server.delete('/videos/:id', () => {
    return 'Delete';
})

server.listen({
    port: 3333
});