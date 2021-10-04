import { FinancialReportPresenter } from "../controllers/financialReportPresenter";
import { FinancialReportResponse } from "../interactor/financialReportResponse";


export class ScreenPresenter implements FinancialReportPresenter {
  render(response: FinancialReportResponse): string {

    return `スクリーン ${response.date} ${response.category} ${response.amount}$`
  }
}
