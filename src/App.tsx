import { ThemeProvider } from "styled-components"
import { TransactionsProvider } from "./contexts/TransactionsContext"
import { Transaction } from "./pages/Transactions"
import { GlobaStyle } from "./styles/global"
import { defaultTheme } from "./styles/theme/default"


export function App() {
  

  return (
      <ThemeProvider theme={defaultTheme}>
         <GlobaStyle />

         <TransactionsProvider>
           <Transaction />
         </TransactionsProvider>
         
      </ThemeProvider>
  )
}

export default App
