import { Table, Column, Model, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { TimeSlot } from './timeslot.model';
import { User } from './user.model';

@Table({
    tableName: 'schedules',
    modelName: 'schedule',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
    paranoid: false,
})
export class Schedule extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    schedule_id: number;

    @Column
    start_date: Date;

    @Column
    end_date: Date;

    @Column
    description: string;

    @HasMany(() => TimeSlot)
    timeslots: TimeSlot[];

    @ForeignKey(() => User)
    @Column
    user_id: number;

    @BelongsTo(() => User)
    professional: User;
}
