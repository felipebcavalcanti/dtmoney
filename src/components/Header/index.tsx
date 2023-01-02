import { HeaderContainer, HeaderContent, NewTransactionsButton } from "./styles";
import { NewTransactionModal } from "../NewTransactionModal";
import logo from "../../assets/logo.svg";
import * as Dialog from '@radix-ui/react-dialog';

export function Header() {

    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt="logo" />
                
                <Dialog.Root>

                    <Dialog.DialogTrigger asChild >
                        <NewTransactionsButton>Nova Transação</NewTransactionsButton>
                    </Dialog.DialogTrigger>

                    <NewTransactionModal />
                    
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}