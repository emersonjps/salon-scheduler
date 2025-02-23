import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'schedules', timestamps: true })
export class Schedule extends Model<Schedule> {
  @Column({ type: DataType.INTEGER, allowNull: false })
  professionalId: number;

  @Column({ type: DataType.DATE, allowNull: false })
  date: Date;

  @Column({ type: DataType.TIME, allowNull: false })
  startTime: string;

  @Column({ type: DataType.TIME, allowNull: false })
  endTime: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  available: boolean;
}
