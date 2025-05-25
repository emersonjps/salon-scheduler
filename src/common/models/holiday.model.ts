import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';
import { ProfessionalHoliday } from './professional-holiday.model';
import { User } from './user.model';

@Table({
    tableName: 'holidays',
    modelName: 'holiday',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    timestamps: true,
    paranoid: false,
})
export class Holiday extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    holiday_id: number;

    @Column
    holiday_date: Date;

    @Column
    name: string;

    @BelongsToMany(() => User, () => ProfessionalHoliday)
    professionals: User[];
}
