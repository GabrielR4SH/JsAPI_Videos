import { fastify } from "fastify";
import { DatabaseMemory } from "./database.js";

const server = fastify();
const database = new DatabaseMemory();

server.get('/', () => {
    return 'Hello World';
});

// GET,POST,PUT,DELETE,PATCH,HEAD

server.post('/videos', () => {
    database.create({
        title: 'Video 01',
        description: 'Esse vídeo é 01',
        duration: 100
    })
    console.log(database.list())
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