import * as S from "./StylesProduto.js"
import Carrinho from "../../assets/Carrinho.svg"

export default function Produto({foto, numItem, kgItem, precoItem, isSaudavel}){
    if(isSaudavel == true){
        return (
            <S.DivProdutos>
                <img src={foto} alt="Foto da carne" />

                <S.DivElementosTextuais>
                    <h2>Item {numItem}</h2>
                    <p>{kgItem}kg/Preço</p>
                    <S.PrecoSaudavel>R$ {precoItem}</S.PrecoSaudavel>
                </S.DivElementosTextuais>

                <S.Carrinho src={Carrinho} alt="Carrinho" />
            </S.DivProdutos>
        )
    }else{
        <S.DivProdutos>
            <S.ImageCarne src={foto} alt="Foto da carne" />

            <S.DivElementosTextuais>
                <h1>Item {numItem}</h1>
                <S.TxtKgPreco>{kgItem}kg/Preço</S.TxtKgPreco>
                <S.PrecoPromo>R$ {precoItem}</S.PrecoPromo>
            </S.DivElementosTextuais>

            <img src={Carrinho} alt="Carrinho" />
        </S.DivProdutos>
    }
}