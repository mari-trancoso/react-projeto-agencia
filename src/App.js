// import styled from "styled-components"
import Header from "./Componentes/Header/Header"
import Footer from "./Componentes/Footer/Footer"
import { useState } from "react"
import TelaHome from "./Telas/Home/TelaHome"
import TelaProdutos from "./Telas/Produtos/TelaProdutos"
import TelaCarrinho from "./Telas/Carrinho/TelaCarrinho"
import { TelaTotal } from "./App.styled"
import { useEffect } from "react"


function App() {
  
  const [telaAtiva, setTelaAtiva] = useState("TelaHome")
  const [listaCarrinho, setListaCarrinho] = useState([])
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [query, setQuery] = useState("")
  const [order, setOrder] = useState("asc")

  let novaListaCarrinho = []

  useEffect(() => {
    const listaCarrinhoArray = JSON.parse(localStorage.getItem("listaCarrinho"))

    if(listaCarrinhoArray){
      setListaCarrinho(listaCarrinhoArray)
    } else{
      setListaCarrinho(listaCarrinho)
    }
    console.log(listaCarrinho)
    
  }, [])

  const addViagem = (viagem) => {
    // novaListaCarrinho = [...listaCarrinho, viagem] 
    novaListaCarrinho = [...listaCarrinho] 
    const novaViagem = novaListaCarrinho.find((viagem2)=> viagem2.planeta === viagem.planeta)
    if (!novaViagem){
      //quando ela não existe entra aqui!
      const viagemModificada = {...viagem, quantidade:1}
      novaListaCarrinho.push(viagemModificada)
    } else{
      //quando ela existe
      console.log(novaViagem, "a")
      novaViagem.quantidade+=1

    }
    
    setListaCarrinho(novaListaCarrinho)

    const stringficarListaCarrinho = JSON.stringify(novaListaCarrinho)
    localStorage.setItem("listaCarrinho", stringficarListaCarrinho)
    localStorage.getItem("listaCarrinho")
    
  }

  const removeViagem = (viagem) => {
    if(window.confirm("Tem certeza que quer remover esta viagem?")){
      const newListaCarrinho = [...listaCarrinho]

      const index = newListaCarrinho.indexOf(viagem)
      console.log(index)
      console.log(viagem)

      if(index > -1){
        newListaCarrinho.splice(index, 1)
        setListaCarrinho(newListaCarrinho)

        const stringficarListaCarrinho = JSON.stringify(newListaCarrinho)
        localStorage.setItem("listaCarrinho", stringficarListaCarrinho)
        localStorage.getItem("listaCarrinho")
      }
    }  
  }

  function avisarCompraFinalizada () {
      alert("Parabéns! Você finalizou a sua compra!")
      setListaCarrinho([])
  }

  const irTelaHome = () => {
    setTelaAtiva("TelaHome")
  }

  const irTelaProdutos = () => {
    setTelaAtiva("TelaProdutos")
  }

  const irTelaCarrinho = () => {
    setTelaAtiva("TelaCarrinho")
  }

  const renderizarTela = () => {
    switch (telaAtiva){
      case "TelaHome":
        return <TelaHome></TelaHome>
      case "TelaProdutos":
        return <TelaProdutos
        setListaCarrinho={setListaCarrinho}
        listaCarrinho={listaCarrinho}
        addViagem={addViagem}
        query={query}
        setQuery={setQuery}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        order={order}
        setOrder={setOrder}
        ></TelaProdutos>
      case "TelaCarrinho":
        return <TelaCarrinho
          removeViagem={removeViagem}
          novaListaCarrinho={novaListaCarrinho}
          listaCarrinho={listaCarrinho}
          setListaCarrinho={setListaCarrinho}
          avisarCompraFinalizada={avisarCompraFinalizada}
        ></TelaCarrinho>
      default:
        return <div>Tela não existe</div>
    }
  }

  return (
    <TelaTotal>
      <Header
        irTelaHome={irTelaHome}
        irTelaProdutos={irTelaProdutos}
        irTelaCarrinho={irTelaCarrinho}
      />
      
      {renderizarTela()}
      <Footer
        irTelaHome={irTelaHome}
        irTelaProdutos={irTelaProdutos}
        irTelaCarrinho={irTelaCarrinho}
      />
    </TelaTotal>
  );
}

export default App;
