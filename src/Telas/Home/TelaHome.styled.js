import styled from "styled-components"
import imagemUniverso from "../../imagem/universo1.jpg"

export const MainHome = styled.div`
    background-image: url(${imagemUniverso});
    height: 100%;
    text-align: center;
    padding-top: 40px;
    font-family: 'Poppins', sans-serif;

    h2{
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 3rem;
        color: white;

        @media screen and (min-device-width : 320px) and (max-device-width : 480px){
            font-size: 1.6rem;
            margin-bottom: 10px;
        }
    }

    p{
        color: white;
        font-size: 2rem;
        padding-bottom: 40px;

        @media screen and (min-device-width : 320px) and (max-device-width : 480px){
            font-size: 1rem;
            padding-bottom: 20px;
        }
    }
`