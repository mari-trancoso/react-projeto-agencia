import styled from "styled-components";

const Main = styled.section `
    padding-top: 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: black;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    height: 100%;

`
export default Main

export const CarrinhoContainer = styled.div `
    font-family: 'Poppins', sans-serif;
    text-align: center;
    color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px;
`

export const ItensCarrinho = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    font-size: 1.2rem;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        font-size: 1rem;
    }

    section{
        padding: 20px;
    }

    button{
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        width: min-content;
        cursor: pointer;

        @media screen and (min-device-width : 320px) and (max-device-width : 480px){
            font-size: 0.8rem;
        }
    }

    button:hover{
        background-color: gray;
    }

`

export const SecaoPrecoFinal = styled.section`
    padding-top: 12px;
    
    p{
        margin-bottom: 12px;
        font-size: 1.4rem;

        @media screen and (min-device-width : 320px) and (max-device-width : 480px){
            font-size: 1rem;
        }
    }

    button{
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        width: min-content;
        width: fit-content;
        cursor: pointer;

        @media screen and (min-device-width : 320px) and (max-device-width : 480px){
            font-size: 0.8rem;
        }
    }

    button:hover{
        background-color: gray;
    }



`
