import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('kill_statistics')
export class KillStatistic {
    @PrimaryColumn()
    id: number;

    @Column()
    world: string;

    @Column()
    race: string;

    @Column({ name: 'last_day_players_killed' })
    lastDayPlayersKilled: number;

    @Column({ name: 'last_day_killed' })
    lastDayKilled: number;

    @Column({ name: 'last_week_players_killed' })
    lastWeekPlayersKilled: number;

    @Column({ name: 'last_week_killed'})
    lastWeekKilled: number;

    @Column()
    date: Date;
}