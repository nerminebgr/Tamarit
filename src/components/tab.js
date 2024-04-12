import React, { useState } from 'react'
import styled from 'styled-components';

const Tabs = styled.div`
    display: flex;
    width: 294.96px;
    height: 43.16px;

    background: #F7F7F7;
    border-radius: 50px;
`

const TabItem = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    background-color: ${props => props.active ? "var(--secondary)" : "transparent"};
    color: ${props => props.active ? "white" : "var(--black)"};

    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    cursor: pointer;
`
export default function Tab() {
    const [active, setActive] = useState(0)
    return (
        <Tabs>
            <TabItem onClick={() => setActive(0)} active={active == 0}>Daily</TabItem>
            <TabItem onClick={() => setActive(1)} active={active == 1}>Weekly</TabItem>
            <TabItem onClick={() => setActive(2)} active={active == 2}>Monthly</TabItem>
        </Tabs>
    )
}
