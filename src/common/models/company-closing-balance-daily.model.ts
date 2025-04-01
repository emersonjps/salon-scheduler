import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'company_closing_balance_dailies',
  modelName: 'company_closing_balance_daily',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  paranoid: false,
})
export class CompanyClosingBalanceDaily extends Model<CompanyClosingBalanceDaily> {
  @Column({
    type: DataType.DATEONLY,
  })
  date_key: Date;

  @Column({
    type: DataType.INTEGER,
  })
  company_id: number;

  @Column({
    type: DataType.INTEGER,
  })
  bank_id: number;

  @Column({
    type: DataType.FLOAT,
  })
  price: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_deleted: boolean;
}
