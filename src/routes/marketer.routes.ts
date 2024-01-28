import { FastifyInstance } from 'fastify';
import { Type } from '@sinclair/typebox';
import {
	getAllOperations,
	createOperation,
} from '../controllers/OperationController';

const MarketerPostSchema = {
	body: Type.Object({
		marketer_id: Type.Number(),
		client_id: Type.Number(),
		type: Type.String(),
		amount: Type.Number(),
		price: Type.Number(),
		current_currency: Type.Optional(Type.String()), // Si es opcional
	}),
};

export const createMarketer = (fastify: FastifyInstance) => {
	fastify.get('/greeting', (request, reply) => {
		// const marketerName = request.body;
		reply.send({ greeting: 'hola manué' });
		// console.log(marketerName);
		//  await createOperation()
	});
	// fastify.post(
	// 	'/',
	// 	options,
	// 	async function (request: , reply: FastifyInstance) {
	// 		// var data = await getData();
	// 		// var processed = await processData(data);
	// 		// return reply.send(processed);
	// 	}
	// );
};

export default async function marketerRoutes(fastify: FastifyInstance) {
	fastify.get('/operations', getAllOperations);
	fastify.post(
		'/operations',
		{
			schema: MarketerPostSchema,
			// Aquí puedes agregar opciones adicionales, como handlers pre-validación
		},
		createOperation
	);
}
