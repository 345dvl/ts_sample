import { FinancialReportResponse } from "./financialReportResponse";

export interface FinancialReportRequester {
  execute():FinancialReportResponse
}