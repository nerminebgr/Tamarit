import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex: 1;
    padding: 40px 10px;
    background: var(--secondary);
    gap: 40px;
`

const Column = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    text-align: center;

    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    flex: 1;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    padding-left: .9em;
    padding-right: .9em;
`

const Item = styled.div`


`
export default function Footer() {
    return (
        <Container>
            <Column>
                Tamarit, l'essence même de l'évasion, magnifié par le savoir-faire de Nexify, pour des souvenirs de voyage inoubliables
            </Column>
            <Column>
                <Box>
                    <Item style={{ fontWeight: 800, marginBottom: 10 }}>Resources</Item>
                    <Item>Mon Compte</Item>
                    <Item>Carte</Item>
                    <Item>sites</Item>
                    <Item>Mes Favoris</Item>
                    <Item>Aide</Item>
                </Box>
                <Box>
                    <Item style={{ fontWeight: 800, marginBottom: 10 }}>Entreprise</Item>
                    <Item>A propos de Nous</Item>
                    <Item>Carrière</Item>
                    <Item>FAQs</Item>
                    <Item>Contacter nous</Item>
                </Box>
                <Box>
                    <Item style={{ fontWeight: 800, marginBottom: 10 }}>Contact Us</Item>
                    <Item>Nexify@gmail.com</Item>
                    <Item>Oued Smar ,Alger</Item>
                </Box>
            </Column>
        </Container>
    )
}
