import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary/index.";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { priceFormatte } from "../../utils/formatter";
import { SeachForm } from "./components/indext";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";



export function Transaction() {

   const { transactions } = useContext(TransactionContext)

    return(
        <div>
            <Header />
            <Summary />
            <SeachForm />

            <TransactionContainer>
                <TransactionTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHighlight variant={transaction.type}>
                                             {priceFormatte.format(transaction.price)}
                                        </PriceHighlight></td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
           
        </div>
    )
}