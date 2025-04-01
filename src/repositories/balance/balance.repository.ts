import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/sequelize';
// import { CompanyClosingBalanceDaily } from '@common/models/company-closing-balance-daily.model';
// import { WhereOptions, literal, Op } from 'sequelize';
// import { CalculateBalanceDto } from '@modules/balance/dto/balance.dto';

// type Balance = {
//     price: number;
//     company_id: number;
//     bank_id: number;
//     date_key: Date;
// };

@Injectable()
export class User {
    // constructor(
    //     @InjectModel(CompanyClosingBalanceDaily)
    //     private companyClosingBalanceDaily: typeof CompanyClosingBalanceDaily,
    // ) {}
    // // <--- remover Promise<void>, typescript consegue inferir
    // async createOrUpdate(toCreate: Balance[], toUpdate: Balance[]): Promise<void> {
    //     const transaction = await this.companyClosingBalanceDaily.sequelize.transaction();
    //     try {
    //         const updateOrCreatePromises = [];
    //         if (toCreate.length) {
    //             const balanceCreate = this.companyClosingBalanceDaily.bulkCreate(toCreate, { transaction });
    //             updateOrCreatePromises.push(balanceCreate);
    //         }
    //         if (toUpdate.length) {
    //             const updatePromises = toUpdate.map(async item => {
    //                 return this.companyClosingBalanceDaily.update(
    //                     { price: item.price },
    //                     {
    //                         where: {
    //                             company_id: item.company_id,
    //                             date_key: item.date_key,
    //                             bank_id: item.bank_id,
    //                         },
    //                         transaction,
    //                     },
    //                 );
    //             });
    //             updateOrCreatePromises.push(...updatePromises);
    //         }
    //         await Promise.all(updateOrCreatePromises);
    //         await transaction.commit();
    //     } catch (error) {
    //         await transaction.rollback();
    //         throw error;
    //     }
    // }
    // async findAll(filter: CalculateBalanceDto) {
    //     const closingBalances = await this.listCompanyClosingBalanceDaily(filter);
    //     return closingBalances || [];
    // }
    // listCompanyClosingBalanceDaily(filter: CalculateBalanceDto) {
    //     const where = this.mountClosingBalanceWhereFilter(filter);
    //     return this.companyClosingBalanceDaily.findAll({
    //         where,
    //         attributes: [
    //             [literal(`round(COALESCE(sum("company_closing_balance_daily".price::numeric), 0), 2)::float`), 'price'],
    //             'date_key',
    //         ],
    //         group: ['date_key'],
    //     });
    // }
    // mountClosingBalanceWhereFilter(filter: CalculateBalanceDto): WhereOptions<CompanyClosingBalanceDaily> {
    //     const bankId = ~~filter.source.split('_')[1] || null;
    //     const where: WhereOptions<CompanyClosingBalanceDaily> = {
    //         is_deleted: false,
    //         date_key: filter.date_key,
    //         company_id: filter.company_id,
    //         bank_id: bankId,
    //     };
    //     if (filter.start_date && filter.end_date) {
    //         where.date_key = {
    //             [Op.between]: [filter.start_date, filter.end_date],
    //         };
    //     }
    //     return where;
    // }
}
