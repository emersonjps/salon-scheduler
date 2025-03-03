import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import User from './user.model';

@Table({ tableName: 'holidays' })
export class Holidays extends Model<Holidays> {

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  professionalId!: number;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  date!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description?: string;

  @BelongsTo(() => User)
  professional!: User;
}
