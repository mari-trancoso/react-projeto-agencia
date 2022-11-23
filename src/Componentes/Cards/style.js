import styled from "styled-components";

export const Card = styled.section `
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-family: Arial, Helvetica, sans-serif;
    width: 20vw;
    height: 60vhvh;
    margin-bottom: 32px;
    box-shadow: 0px 8px 8px 8px rgba(102,102,102,1);
    padding: 10px;
    font-family: 'Poppins', sans-serif;
    background-color: black;

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        height: auto;
        
    }
    
    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        height: 52vh;
        width: 30vw;
        display: flex;
        align-items: center;
    }

    @media screen and (min-device-width : 801px) and (max-device-width : 1200px){
        width: 40vw;
        height: 60vh;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        width: 32vw;
        height: 60vh;
    }
`

export const PrimeiroBloco = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ImagemPlanetas = styled.img`
    width: 20vw;
    height: 22vh;
    border-radius: 12px;

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        width: 16vw;
        height: 12vh;
        
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        width: 24vw;
        height: 12vh;
        text-align: center;
    }

    @media screen and (min-device-width : 801px) and (max-device-width : 1200px){
        width: 36vw;
        height: 16vh;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        width: 28vw;
    }
`

export const TextoCard = styled.div`
    /* height: 44%; */
    font-size: 0.8rem;
    color: white;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        font-size: 0.5rem;
    }

    @media screen and (min-device-width : 801px) and (max-device-width : 1200px){
        font-size: 1.2rem;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        font-size: 0.7rem;
    }
`

export const BotaoCarrinho = styled.span`

    button{
        height: 6vh;
        width: 3vw;
        border: none;
        border-radius: 10px;
        cursor: pointer;

        @media screen and (min-device-width : 481px) and (max-device-width : 800px){
            height: 4vh;
            width: max-content;
        }

        @media screen and (min-device-width : 320px) and (max-device-width : 480px){
            width: 4vw;
            height: 3vh;
        }

        @media screen and (min-device-width : 801px) and (max-device-width : 1200px){
            width: 5vw;
            height: 4vw;
        }
    }

    button:hover{
        background-color: gray;
    }

    img{
        @media screen and (min-device-width : 320px) and (max-device-width : 480px){
            width: 4vw;
            height: 3vh;
        }
    }
`

export const SegundoBloco = styled.section`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        height: 40vh;
    }
    
    p{
        margin: 8px;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        height: 30vh;
        font-size: 0.4rem;
    }

    
`
export const ParagrafoValorPessoa = styled.p`
    font-size: 0.6rem;
    
`