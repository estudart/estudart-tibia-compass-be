import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('creatures')
export class Creature {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    race: string;

    @Column({ name: 'image_url' })
    imageUrl: string;

    @Column()
    featured: boolean;

    @Column()
    boosted: boolean;

    @Column()
    date: Date;
}
