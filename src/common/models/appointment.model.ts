import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model';

@Table({
    tableName: 'appointments',
    modelName: 'appointment',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
    paranoid: false,
})
export class Appointment extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    appointment_id: number;

    @ForeignKey(() => User)
    @Column
    user_id: number;

    @BelongsTo(() => User)
    user: User;

    @Column
    client_name: string;

    @Column
    appointment_date: Date;

    @Column
    start_time: string; // Ex: "15:00"

    @Column
    end_time: string; // Ex: "15:30"
}
