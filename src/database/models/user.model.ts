import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { UserRole } from 'src/auth/constants/User.Roles';

@Table({
  tableName: 'users',
  timestamps: true,
})
export default class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.ENUM(...Object.values(UserRole)), allowNull: false })
  role: UserRole;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  imageUrl: string;
}