import { FinancialDataGateway } from "./financialDataGateway";
import { FinancialReportRequester } from "./financialReportRequester";
import { FinancialReportResponse } from "./financialReportResponse";

export class FinancialReportGenerator implements
  FinancialReportRequester {
  constructor(private financialGateway: FinancialDataGateway) {}
  execute(): FinancialReportResponse {
    const { category, amount, date } = this.financialGateway.getFinancialData()
    return {
      category, amount, date
    }
  }
}