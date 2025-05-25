import { Table, Column, Model, ForeignKey, BelongsTo, HasMany, DataType } from 'sequelize-typescript';
import { TimeSlot } from './timeslot.model';
import { User } from './user.model';
import { DaysOfWeek } from 'src/auth/constants/DaysOfWeek';

@Table({
    tableName: 'schedules',
    modelName: 'schedule',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    timestamps: true,
    paranoid: false,
})
export class Schedule extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    id: number;

    @Column
    start_date: Date;

    @Column
    end_date: Date;

    @Column({ type: DataType.ENUM(...Object.values(DaysOfWeek)), allowNull: false })
    day_of_week: DaysOfWeek;

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
