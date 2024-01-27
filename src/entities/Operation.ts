import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
} from 'typeorm';
import { Marketer } from './Marketer';

@Entity()
export class Operation {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	marketer_id: number;

	@Column()
	client_id: number;

	@Column()
	type: string;

	@Column()
	amount: number;

	@Column()
	price: number;

	@Column()
	current_currency: string;

	@ManyToOne(() => Marketer, (marketer) => marketer.operation)
	marketer: Marketer;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAd: Date;
}
