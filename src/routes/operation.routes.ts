import { FastifyInstance } from 'fastify';
import { Type } from '@sinclair/typebox';
import {
	getAllOperations,
	createOperation,
} from '../controllers/OperationController';

const OperationPostSchema = {
	body: Type.Object({
		marketer_id: Type.Number(),
		client_id: Type.Number(),
		type: Type.String(),
		amount: Type.Number(),
		price: Type.Number(),
		current_currency: Type.Optional(Type.String()), // Si es opcional
	}),
};

export default async function operationRoutes(fastify: FastifyInstance) {
	fastify.get('/operations', getAllOperations);
	fastify.post(
		'/operations',
		{
			schema: OperationPostSchema,
			// Aquí puedes agregar opciones adicionales, como handlers pre-validación
		},
		createOperation
	);
}
