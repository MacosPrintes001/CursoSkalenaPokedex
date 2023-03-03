import { CardContainer, Container, CardInfo, Code, Name, CardImage, Photo } from './styles'

function PokemonCard(code, name, src) {
    return (
        <>
            <Container>
                <CardContainer>
                    <CardInfo>
                        <Code> {code}</Code>
                        <Name> {name}</Name>
                    </CardInfo>
                </CardContainer>
                <CardImage>
                    <Photo>{src}</Photo>
                </CardImage>
            </Container>
        </>

    )
}

export default PokemonCard;