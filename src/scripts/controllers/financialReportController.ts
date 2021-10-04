import { FinancialReportRequester } from "../interactor/financialReportRequester";
import { FinancialReportPresenter } from "./financialReportPresenter";

export class FinancialReportController {
  constructor(private financialPresenter: FinancialReportPresenter, private financialRequester: FinancialReportRequester) {
  }
  // データを取って、インターフェイスに沿って実行する
  outputFinancialReport(): string {
    // データを取ってくる処理
    const response = this.financialRequester.execute()

    return this.financialPresenter.render(response)
  }
}
