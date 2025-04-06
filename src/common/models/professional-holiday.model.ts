import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Holiday } from './holiday.model';
import { User } from './user.model';

@Table({
    tableName: 'professional_holidays',
    modelName: 'professional_holiday',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
    paranoid: false,
})
export class ProfessionalHoliday extends Model {
    @ForeignKey(() => User)
    @Column
    professional_id: number;

    @ForeignKey(() => Holiday)
    @Column
    holiday_id: number;
}
