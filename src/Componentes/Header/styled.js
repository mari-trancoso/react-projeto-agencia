import styled from "styled-components";
import imagemUniverso from "../../imagem/universo1.jpg"

export const HeaderContainer = styled.section `
    background-image: url(${imagemUniverso});
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TituloContainer = styled.div`
    height: 50vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: auto;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        height: 30vh;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        height: 40vh;
    }

    img{
        height: 42vh;
        width: 22vw;

        @media screen and (min-device-width : 801px) and (max-device-width : 1200px) {
            height: min-content;
            width: min-content;
        }

        @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
            height: 40vh;
            width: min-content;
        }

        @media screen and (min-device-width : 320px) and (max-device-width : 480px){
            height: 30vh;
            width: 42vw;
        }
        
    }
`

export const Titulo = styled.h1`
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    color: white;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        font-size: 1.6rem;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        font-size: 1.4rem;
    }
`
export const BotoesContainer = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    margin-right: auto;
    width: 40%;
    font-family: 'Poppins', sans-serif;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        width: min-content;
        margin-left: 8px;
    }

    @media screen and (min-device-width : 801px) and (max-device-width : 1200px){
        margin-left: 12px;
        width: 52vw;
        margin-bottom: 8px;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        width: 60vw;
    }

    button{
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        background-color: black;
        color: white;
        border: 1px solid white;
        border-radius: 8px;
        width: 10vw;
        cursor: pointer;

        @media screen and (min-device-width : 320px) and (max-device-width : 480px){
            font-size: 0.8rem;
            width: 20vw;
            margin-right: 8px;
        }

        @media screen and (min-device-width : 801px) and (max-device-width : 1200px){
            font-size: 1.4rem;
            width: 36vw;
            margin-right: 16px;
            margin-left: 20px;
        }

        @media screen and (min-device-width : 481px) and (max-device-width : 800px){
            width: 16vw;
        }
        
    }

    button:hover{
        background-color: gray;
    }
` 
