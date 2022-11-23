import Cards from "../../Componentes/Cards/Cards"
import todasViagens from "../../objetos"
import Main from "./TelaProdutos.styled"
// import { CardContainer } from "../../styled"
import { Filtros, Inputs, Ordenacao, CardContainer } from "./TelaProdutos.styled"

function TelaProdutos (props){

    return (
      <Main>
      
            <Filtros>
                <Inputs>
                    <input
                    placeholder="Busca por planeta"
                    value={props.query}
                    onChange={(event) =>props.setQuery(event.target.value)}
                    />
                    <input 
                    placeholder="Preço mínimo"
                    type="number"
                    value={props.minPrice}
                    onChange={(event) =>props.setMinPrice(event.target.value)}
                    />
            
                    <input 
                    placeholder="Preço máximo"
                    type="number"
                    value={props.maxPrice}
                    onChange = {(event) => props.setMaxPrice(event.target.value)}
                    />
                </Inputs>
                <Ordenacao>
                    <label for="sortingParameter">Ordenar preço:</label>
                    <select
                        value={props.order}
                        onChange={(event) => {props.setOrder(event.target.value)}}
                    >
                    <option value={"asc"}>Crescente</option>
                    <option value={"desc"}>Decrescente</option>
                    </select>
                </Ordenacao>
            </Filtros>
        <CardContainer>
        {todasViagens
        .filter((item) => {
          return item.planeta.toLocaleUpperCase().includes(props.query.toLocaleUpperCase()) 
        })
        .filter((item) => {
          return item.preco >= props.minPrice || props.minPrice === ""
        })
        .filter((item) => {
          return item.preco <= props.maxPrice || props.maxPrice === ""
        })
        .sort((a, b) => {
          return a.preco - b.preco
        })
        .sort(() => {
          if (props.order === "asc"){
            return 0
          } else {
            return -1
          }
        })
        .map((planeta)=>{
          return (
            <Cards  
              key={planeta.id}
              planeta={planeta}
              addViagem={props.addViagem}
              >
            </Cards>
          )
        })}
        </CardContainer>
        </Main>
        
    )
}

export default TelaProdutos