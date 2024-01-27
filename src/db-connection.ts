import { DataSource } from 'typeorm';
import { Test } from './entities/Test';
import { Operation } from './entities/Operation';
import { Marketer } from './entities/Marketer';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'postgres',
	port: 5432,
	username: 'root',
	password: 'root',
	database: 'root',
	synchronize: true,
	logging: true,
	entities: [Marketer, Operation, Test],
	subscribers: [],
	migrations: [],
});
