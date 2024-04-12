import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
    gap: 12px;

    width: 200px;
    height: 44px;

    background: ${props => props.active ? "var(--primary)" : "transparent"};
    border-radius: 9px;
    cursor: pointer;
    margin-block: 3px;
    margin-left: .5em;
    transition: all .2s ease-in;
`

const Text = styled.div`
    font-size: 16px;
    color: var(--black);
`

export default function SideItem({ text, Icon, active, onClick }) {
    return (
        <Container active={active} onClick={onClick}>
            <Icon size="18" color={"var(--black)"} variant={active ? 'Bold' : 'Linear'} />
            <Text>{text}</Text>
        </Container>
    )
}
