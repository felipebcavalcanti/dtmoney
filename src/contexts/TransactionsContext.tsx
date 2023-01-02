import { createContext, ReactNode, useEffect, useState } from "react";




interface TransactionProps {
    id: string;
    price: number;
    type: "outcome" | "income";
    description: string;
    category: string;
    createdAt: string;
}

interface TransactionContextType {
    transactions: TransactionProps[];
}

interface TransactionsContextProvider {
    children: ReactNode;
}


    
export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }:TransactionsContextProvider ) {

    const [transactions, setTransactions] = useState<TransactionProps[]>([])



    
    useEffect(() => {
        fetch("http://localhost:3000/transactions")
        .then((response) => response.json())
        .then(data => setTransactions(data))
    }, [])

    return (
       <TransactionContext.Provider value={{ transactions }}>
            {children}
       </TransactionContext.Provider>
    )

}