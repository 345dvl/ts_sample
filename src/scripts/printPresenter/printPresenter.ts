import { FinancialReportPresenter } from "../controllers/financialReportPresenter";
import { FinancialReportResponse } from "../interactor/financialReportResponse";


export class PrintPresenter implements FinancialReportPresenter {
  render(response: FinancialReportResponse): string {

    return `プリント ${response.date} ${response.category} ${response.amount}円`
  }
}
