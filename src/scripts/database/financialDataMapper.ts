import { FinancialDataGateway } from "../interactor/financialDataGateway";
import { FinancialData } from "../interactor/financialEntities";

export class FinancialDataMapper implements FinancialDataGateway {
  getFinancialData(): FinancialData {
    return new FinancialData('sample', 1000, new Date())
  }
}
