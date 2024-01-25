import 'reflect-metadata';
import fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';

const app: FastifyInstance = fastify({ logger: true });

// interface IQuery {
// 	name: string;
// }

// interface IHeaders {
// 	'x-token': string;
// }

// interface IReply {
// 	code: number;
// 	message: string;
// 	body: any;
// }

app.register(cors, {
	origin: '*',
	methods: ['GET', 'POST'],
});

app.get('/', (request, reply) => {
	reply.send({ hello: 'Álvaro' });
});

app.listen({ port: 3001, host: '0.0.0.0' }, (err, address) => {
	if (err) {
		app.log.error(err);
		process;
	}
	app.log.info(`server listening on ${address}`);
});
