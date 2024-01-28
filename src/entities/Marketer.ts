import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
} from 'typeorm';
// import { Client } from './Client';
import { Operation } from './Operation';

@Entity()
export class Marketer {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	password: string;

	@OneToMany(() => Operation, (operation) => operation.marketer)
	operation: Operation[];

	// @OneToMany(() => Client, (client) => client.marketer)
	// client: Client[];

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAd: Date;
}
