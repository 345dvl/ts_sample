import { FinancialReportController } from "./controllers/financialReportController"
import { ScreenPresenter } from "./screenPresenter/screenPresenter"
import { PrintPresenter } from "./printPresenter/printPresenter"
import { FinancialReportGenerator } from "./interactor/financialReportGenerator"
import { FinancialDataMapper } from "./database/financialDataMapper"

const screen = new ScreenPresenter()
const print = new PrintPresenter()
const financialMapper = new FinancialDataMapper()
const financialGenerator = new FinancialReportGenerator(financialMapper)
const controller = new FinancialReportController(screen, financialGenerator)

document.querySelector('#hoge').textContent = controller.outputFinancialReport()



// console.log('a')


// interface Myinterface{
//     name: string
// }

// class Myclass implements Myinterface {
//     name: string
// }
