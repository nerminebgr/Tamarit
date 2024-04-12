import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 41.55px;
    height: 53.05px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    background :${props => props.active ? "#831717" : "transparent"};

    border-radius: 5px;
    color :${props => props.active ? "#FFFFFF" : "var(--black)"};
    div{
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: -0.01em;
    }
    span{
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;

        /* identical to box height */

    }
`


export default function DateItem({ active = false }) {
    return (
        <Container active={active}>
            <div>4</div>
            <span>Tue</span>
        </Container>
    )
}
