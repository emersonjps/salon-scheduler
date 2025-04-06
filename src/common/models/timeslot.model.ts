import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Schedule } from './schedule.model';

@Table({
    tableName: 'time_slots',
    modelName: 'time_slot',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
    paranoid: false,
})
export class TimeSlot extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    timeslot_id: number;

    @ForeignKey(() => Schedule)
    @Column
    schedule_id: number;

    @BelongsTo(() => Schedule)
    schedule: Schedule;

    @Column
    start_time: string; // Ex: "14:00"

    @Column
    end_time: string; // Ex: "14:30"
}
