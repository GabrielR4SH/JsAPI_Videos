import { fastify } from "fastify";
import { DatabaseMemory } from "./database.js";

const server = fastify();
const database = new DatabaseMemory();

// GET,POST,PUT,DELETE,PATCH,HEAD
//Request Body
server.post('/videos', (request, reply) => {
    const {title, description, duration} = request.body
    console.log(request.body);

    database.create({
        title,
        description,
        duration
    });
    
    return reply.status(201).send()
});

server.get('/videos', (request, reply) => {
    const videos = database.list();
    console.log(videos);
    return videos;
});

//Route Parameter
server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id;
    const { title, description, duration } = request.body;
    database.update(videoId, {
        title,
        description,
        duration
    })

    return reply.statusCode(204).send()

});

server.delete('/videos/:id', () => {
    return 'Delete';
})

server.listen({
    port: 3333
});