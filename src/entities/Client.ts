// import {
// 	Column,
// 	Entity,
// 	PrimaryGeneratedColumn,
// 	CreateDateColumn,
// 	UpdateDateColumn,
// 	ManyToOne,
// } from 'typeorm';
// import { Marketer } from './Marketer';

// @Entity()
// export class Client {
// 	@PrimaryGeneratedColumn()
// 	id: number;

// 	@Column()
// 	name: string;

// 	@Column()
// 	password: string;

// 	@ManyToOne(() => Marketer, (marketer) => marketer.operation)
// 	marketer: Marketer;

// 	@CreateDateColumn()
// 	createdAt: Date;

// 	@UpdateDateColumn()
// 	updatedAd: Date;
// }
