import { BotoesLink, ContainerFooter, BotoesContainer, Paragrafo, Icones, Span } from "./Footer.styled"
import logoGithub from "../../imagem/Git.svg"
import logoLinkedin from "../../imagem/Linkedin.svg"

function Footer (props) {

    return (
        <ContainerFooter>
            <BotoesContainer>
                <BotoesLink onClick={props.irTelaHome}>Home</BotoesLink>
                <BotoesLink onClick={props.irTelaProdutos}>Produtos</BotoesLink>
                <BotoesLink onClick={props.irTelaCarrinho}>Carrinho</BotoesLink>
            </BotoesContainer>
            <div>
                <Paragrafo>Feito por Mariana Negrão Trancoso</Paragrafo>
                <Span>
                    <a href="https://github.com/mari-trancoso">
                        <Icones alt="logo-github" src={logoGithub}/>
                    </a>
                    <a href="https://www.linkedin.com/in/mariana-negrao-trancoso-a17921b9/">
                        <Icones alt="logo-github" src={logoLinkedin}/>
                    </a>
                </Span>
            </div>
        </ContainerFooter>
    )

}

export  default Footer