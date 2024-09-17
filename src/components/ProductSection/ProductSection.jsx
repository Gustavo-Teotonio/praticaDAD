import * as S from "./StylesProductSection.js"
import Produto from "../Products/produto.jsx"
import Carne1 from "../../assets/Carne1.svg"
import Carne2 from "../../assets/Carne2.svg"
import Carne3 from "../../assets/Carne3.svg"


export default function ProductSection({isVertical, isPromo}){
    if(isVertical == true){
        <S.DivProdutos>
                <Produto foto = {Carne1} numItem = "1" precoItem = "000.000" kgItem = "1" isSaudavel={true}/>
                <Produto foto = {Carne2} numItem = "2" precoItem = "000.000" kgItem = "1" isSaudavel={true}/>
                <Produto foto = {Carne3} numItem = "3" precoItem = "000.000" kgItem = "1" isSaudavel={true}/>
        </S.DivProdutos>
    }else if(isVertical == false && isPromo == true){
        <S.DivProdutosHorizontal>
                <Produto foto = {Carne1} numItem = "1" precoItem = "000.000" kgItem = "1" isSaudavel={false}/>
                <Produto foto = {Carne2} numItem = "2" precoItem = "000.000" kgItem = "1" isSaudavel={false}/>
                <Produto foto = {Carne3} numItem = "3" precoItem = "000.000" kgItem = "1" isSaudavel={false}/>
        </S.DivProdutosHorizontal>
    }else{
        <S.DivProdutosHorizontal>
            <Produto foto = {Carne1} numItem = "1" precoItem = "000.000" kgItem = "1" isSaudavel={true}/>
            <Produto foto = {Carne2} numItem = "2" precoItem = "000.000" kgItem = "1" isSaudavel={true}/>
            <Produto foto = {Carne3} numItem = "3" precoItem = "000.000" kgItem = "1" isSaudavel={true}/>
        </S.DivProdutosHorizontal>
    }
}