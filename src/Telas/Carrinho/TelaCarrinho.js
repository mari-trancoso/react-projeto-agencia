import { formatarPreco } from "../../formatacaoPreco"
import Main, { SecaoPrecoFinal, CarrinhoContainer, ItensCarrinho } from "./TelaCarrinho.styled"

function TelaCarrinho (props) {

  let totalPreco = props.listaCarrinho.reduce((acc, viagem)=> acc +  viagem.preco*viagem.quantidade, 0)
// let totalPreco =0


return (
  <Main>
    <CarrinhoContainer>
        <h1>CARRINHO</h1>
        <div>
            <ItensCarrinho>
            {props.listaCarrinho
            .map((planeta) => {
                // {totalPreco += Number(planeta.preco * planeta.quantidade)}
                return(
                <section>
                    <p>Planeta escolhido: {planeta.planeta}</p>
                    <p>Quantidade: {planeta.quantidade}</p>
                    <p>Valor: {formatarPreco.format(planeta.preco * planeta.quantidade)}</p>
                    <button onClick={() => props.removeViagem(planeta)}>Remover</button>
                </section>)
            })
            }
            </ItensCarrinho>
            <SecaoPrecoFinal>
                <p>
                    {`Preço total: ${formatarPreco.format(totalPreco)}`}
                </p>
                <button onClick={props.avisarCompraFinalizada}>Finalizar compra</button>
            </SecaoPrecoFinal>
        </div>
    </CarrinhoContainer>
    </Main>
)

}

export default TelaCarrinho