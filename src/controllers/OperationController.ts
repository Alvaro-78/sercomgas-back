// src/controllers/OperationController.ts

import { FastifyReply, FastifyRequest } from 'fastify';
import { getRepository } from 'typeorm';
import { Operation } from '../entities/Operation';

export const getAllOperations = async (
	req: FastifyRequest,
	reply: FastifyReply
) => {
	const operationRepository = getRepository(Operation);
	const operations = await operationRepository.find({
		relations: ['marketer'],
	});
	return reply.send(operations);
};

export const createOperation = async (
	req: FastifyRequest,
	reply: FastifyReply
) => {
	const operationRepository = getRepository(Operation);
	const operationData = req.body as Partial<Operation>;

	const newOperation = operationRepository.create(operationData);

	const savedOperation = await operationRepository.save(newOperation);

	return reply.status(201).send(savedOperation);
};
