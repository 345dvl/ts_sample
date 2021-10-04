import { FinancialReportResponse } from "../interactor/financialReportResponse";

export interface FinancialReportPresenter {
  // インターフェイスなので、スクリーンとプリント共通した処理
  render(response: FinancialReportResponse): string
}
