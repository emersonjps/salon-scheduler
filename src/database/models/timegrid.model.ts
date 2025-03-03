import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import User from './user.model';
import SlotInterface from 'src/interfaces/SlotInterface';

@Table({ tableName: 'timegrid' })
export class TimeGrid extends Model<TimeGrid> {
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  professionalId: number;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  date: string;

  @Column({ type: DataType.TIME, allowNull: false })
  workStartTime: string;

  @Column({ type: DataType.TIME, allowNull: false })
  workEndTime: string;

  @Column({ type: DataType.JSONB, allowNull: false })
  slots: SlotInterface[];

  @BelongsTo(() => User)
  professional: User;
}
