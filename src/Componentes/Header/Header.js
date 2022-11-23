import React from "react";
import {Titulo, HeaderContainer, TituloContainer, BotoesContainer} from "./styled";
import novalogoImagem from "../../imagem/logoboa.png"

function Header (props){

    return (
        
        <HeaderContainer>
            <TituloContainer>
                <img src={novalogoImagem} alt="logo" />
                <Titulo>A SUA LOJA DE VIAGENS ESPACIAIS</Titulo>
            </TituloContainer>

            <BotoesContainer>
                <button onClick={props.irTelaHome}>Home</button>
                <button onClick={props.irTelaProdutos}>Produtos</button>
                <button onClick={props.irTelaCarrinho}>Carrinho</button>
            </BotoesContainer>

        </HeaderContainer>
        
    )
}

export default Header