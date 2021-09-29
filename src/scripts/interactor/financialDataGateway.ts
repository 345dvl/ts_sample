import { FinancialData } from './financialEntities';

export interface FinancialDataGateway {
  getFinancialData() :FinancialData
}