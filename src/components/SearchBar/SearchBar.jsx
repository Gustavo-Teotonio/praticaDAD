import * as S from "./StylesSearchBar.js"
import lupa from "../../assets/Pesquisa.svg"

export default function Search(){
    return (
            <form>
            <S.Container>
                <img src={lupa} alt="Lupa" />
                <S.SearchBar type = "text" id = "nome" name = "nome" placeholder="Meat"/>
            </S.Container>
            </form>
    )
}