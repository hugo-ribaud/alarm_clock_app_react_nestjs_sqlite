import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Alarm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  time: string;

  @Column()
  label: string;
}
