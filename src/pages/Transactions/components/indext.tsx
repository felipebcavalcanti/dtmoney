import { SeachFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react"

export function SeachForm() {
    return(

        <SeachFormContainer>
            <input type="text" placeholder="Busque por uma transação" />

            <button type="submit">
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SeachFormContainer>


    );
}