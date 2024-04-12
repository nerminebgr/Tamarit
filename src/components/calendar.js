import { Add } from 'iconsax-react'
import React from 'react'
import styled from 'styled-components'
import DateItem from './dateItem'
import DateMeet from './dateMeet'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 450px;
    border: 1px solid #EAEAEA;
    border-radius: 10px;
    padding:20px 40px;
`
const Row = styled.div`
    display: flex;
    justify-content: space-between;
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: -0.01em;
    display: flex;
`
const SubTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    /* identical to box height */

    color: #A06027;
`

export default function CalendarItem() {
    return (
        <Container>
            <Row>
                <Title>Septembre</Title>
                <SubTitle>  <Add />Ajouter evenement</SubTitle>
            </Row>
            <Row style={{ marginTop: 30, marginBottom: 30 }}>
                <DateItem />
                <DateItem active={true} />
                <DateItem />
                <DateItem />
                <DateItem />
                <DateItem />
            </Row>
            <Column>
                <DateMeet />
                <DateMeet hasPlan={false} />
                <DateMeet />
                <DateMeet hasPlan={false} />
            </Column>
        </Container>
    )
}
