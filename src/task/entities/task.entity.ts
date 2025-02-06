/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    title: string;
    @Column({ nullable: true })
    description?: string;

    @Column({ type: 'enum', enum: ['pending', 'in-progress', 'completed'], default: 'pending'})
    status: 'pending' | 'in-progress' | 'completed';

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;


}
