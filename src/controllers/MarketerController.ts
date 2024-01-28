import { FastifyReply, FastifyRequest } from 'fastify';
import { getRepository } from 'typeorm';
import { Marketer } from '../entities/Marketer';

export const createOperation = async (
	req: FastifyRequest,
	reply: FastifyReply
) => {
	const marketersRepository = getRepository(Marketer);
	const marketerData = req.body as Partial<Marketer>;

	const newMarketer = marketersRepository.create(marketerData);

	const savedOperation = await marketersRepository.save(newMarketer);

	return reply.status(201).send(savedOperation);
};

export const getAllMarketers = async (
	req: FastifyRequest,
	reply: FastifyReply
) => {
	const marketersRepository = getRepository(Marketer);
	const marketers = await marketersRepository.find({
		relations: ['marketer'],
	});
	return reply.send(marketers);
};
