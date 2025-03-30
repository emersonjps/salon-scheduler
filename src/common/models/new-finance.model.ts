// import { FinanceGuideInfoModel } from './finance-guide-info.model';
import { Table, Column, DataType, Model, HasMany } from 'sequelize-typescript';

@Table({
    tableName: 'new_finances',
    modelName: 'finance',
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
})
export class NewFinanceModel extends Model<NewFinanceModel> {
    @Column({
        type: DataType.DATE,
    })
    paid_date: Date;

    @Column({
        type: DataType.INTEGER,
    })
    company_id: number;

    @Column({
        type: DataType.STRING,
    })
    source: string;

    @Column({
        type: DataType.STRING,
    })
    type: string;

    @Column({
        type: DataType.INTEGER,
    })
    finance_merge_parent_id: number;

    @Column({
        type: DataType.STRING,
    })
    payment_method: string;

    @Column({
        type: DataType.FLOAT,
    })
    price: number;

    // @HasMany(() => FinanceGuideInfoModel, {
    //     as: 'FGI',
    //     foreignKey: 'finance_id',
    // })
    // financeGuideInfo: FinanceGuideInfoModel[];
}
