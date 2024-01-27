import 'reflect-metadata';
import fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import { AppDataSource } from './db-connection';

const app: FastifyInstance = fastify({ logger: true });

async function main() {
	await AppDataSource.initialize();
	app.listen({ port: 3001, host: '0.0.0.0' }, (err, address) => {
		if (err) {
			app.log.error(err);
			process;
		}
		app.log.info(`server listening on ${address}`);
	});
}

main();

app.register(cors, {
	origin: '*',
	methods: ['GET', 'POST'],
});

app.get('/', (request, reply) => {
	reply.send({ hello: 'Álvaro' });
});

