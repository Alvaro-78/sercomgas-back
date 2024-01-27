import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
} from 'typeorm';
import { Operation } from './Operation';

@Entity()
export class Marketer {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@OneToMany(() => Operation, (operation) => operation.marketer)
	operation: Operation[];

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAd: Date;
}
