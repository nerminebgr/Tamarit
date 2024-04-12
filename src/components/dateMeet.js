import dayjs from 'dayjs'
import { More } from 'iconsax-react'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`

const Date = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    /* identical to box height */

    color: #757575;
`

const Row = styled.div`
    display: flex;
    flex: 1;
    width: 277.01px;
    height: 70.03px;

    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    border-radius: 10px;
    justify-content: space-between;
`

const Column = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    padding-left: 20px;
    div{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;

        color: #000000;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    span{
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #757575;
    }
`

const Divider = styled.div`
    width: 11.08px;
    height: 70.03px;
    background: #831717;
    border-radius: 10px;
`

const Div = styled.div`
    width: 292.25px;
    display: flex;
    margin-right: 40px;
    margin-left: 40px;
    flex: 1;
    border: 1px solid #EAEAEA;
`

export default function DateMeet({ hasPlan = true }) {
    return (
        <Container>
            <Date>{dayjs().format("HH:mm")}</Date>
            {
                hasPlan ? (
                    <Row>
                        <Divider />
                        <Column>
                            <div>Festival</div>
                            <span>{dayjs().format("HH:mm")} {dayjs().add(30, "m").format("HH:mm")}</span>
                        </Column>
                        <More size="20" color="var(--black)" />
                    </Row>
                ) : (
                    <Div />
                )
            }
        </Container>
    )
}
