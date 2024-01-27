import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Test {
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

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAd: Date;
}
