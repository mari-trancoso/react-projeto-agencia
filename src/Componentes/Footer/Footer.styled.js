import styled from "styled-components";

export const ContainerFooter = styled.div`
    font-family: 'Poppins', sans-serif;
    background-color: black;
    height:20vh;
    padding: 20px;
    border-top: 1px solid white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        height: 14vh;
    }

    @media screen and (min-device-width : 801px) and (max-device-width : 1200px){
        height: 12vh;
    }
`
export const BotoesContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const BotoesLink = styled.button`
    border: none;
    background-color: black;
    width: min-content;
    font-family: 'Poppins', sans-serif;
    color: white;
    margin-bottom: 12px;
    cursor: pointer;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        font-size: 0.6rem;
    }

    @media screen and (min-device-width : 801px) and (max-device-width : 1200px){
        font-size: 1rem;
    }

`

export const Paragrafo = styled.p`
    font-family: 'Poppins', sans-serif;
    color: white;
    text-align: center;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        font-size: 0.6rem;
    }

    @media screen and (min-device-width : 801px) and (max-device-width : 1200px){
        font-size: 1rem;
    }
`

export const Span = styled.span`
    display: flex;
    justify-content: start;
    margin-top: 8px;
    
`

export const Icones = styled.img`
    height: 4vh;
    padding-right: 16px;
    margin-top: 12px;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        height: 2vh;
        margin-top: 4px;
    }

    @media screen and (min-device-width : 801px) and (max-device-width : 1200px){
        height: 3vh;
    }
`