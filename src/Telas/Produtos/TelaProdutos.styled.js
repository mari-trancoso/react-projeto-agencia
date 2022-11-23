import styled from "styled-components";

const Main = styled.section `
    padding-top: 40px;
    display: flex;
    flex-wrap: wrap;
    background-color: black;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        padding-left: 8px;
        padding-top: 20px;
    }

`
export default Main

export const Filtros = styled.section`
    text-align: center;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 10px;
    padding-left: 12px;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        width: 300px;
        margin-right: auto;
        display: flex;
        flex-direction: column;
    }

    @media screen and (min-device-width : 801px) and (max-device-width : 1200px){
        display: flex;
        flex-direction: column;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        display: flex;
        flex-direction: column;
    }

`

export const Inputs = styled.section`
    display: flex;
    justify-content: space-between;
    width: 44%;
    height: 5vh;

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        width: min-content;
        height: 4vh;
    }

    input{

        @media screen and (min-device-width : 320px) and (max-device-width : 480px){
            font-size: 0.5rem;
            width: 20vw;
            height: 4vh;
            margin-right: 4px;
        }

        @media screen and (min-device-width : 801px) and (max-device-width : 1200px){
            font-size: 1rem;
            width: 20vw;
            height: 4vh;
            margin-right: 12px;
        }

        @media screen and (min-device-width : 481px) and (max-device-width : 800px){
            width: 28vw;
            margin-right: 12px;
        }
    }

`

export const Ordenacao = styled.section`
    height: 5vh;
    width: 25%;
    padding-right: 14px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        width: min-content;
        height: 4vh;
        font-size: 1rem;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        width: 50vw;
        height: 4vh;
    }

    @media screen and (min-device-width : 801px) and (max-device-width : 1200px){
        width: 40vw;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        width: 50vw;
        margin-top: 8px;
    }


    label{
        font-size: 1.2rem;
        
        @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        font-size: 1rem;
        }

        @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        font-size: 0.6rem;
        }

        @media screen and (min-device-width : 801px) and (max-device-width : 1200px){
            font-size: 1.2rem;
        }
    
    }

    select{
        @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        font-size: 0.6rem;
        }

        @media screen and (min-device-width : 801px) and (max-device-width : 1200px){
            font-size: 1rem;
        }

    }
`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 24px;
    
`