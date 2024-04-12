import { Rating, RoundedStar, ThinStar } from '@smastrom/react-rating'
import React from 'react'
import styled  from 'styled-components'


const Container = styled.div`
    width: 414px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
    padding-bottom: 1em;
`
const Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: var(--primary);
    leading-trim: both;
    text-edge: cap;
    text-align: center;
`
const SubTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    leading-trim: both;
    text-edge: cap;
    text-align: left;
    margin-top: .5em;
    margin-bottom: .5em;
`

const Image = styled.img`
    width: 414px;
    height: 246.86px;
    object-fit: contain;
`


const Row = styled.div`
    display: flex;
    padding-top: .5em;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
`

const Review = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
    color: var(--primary);
`

export default function Card({ image, text, title, review, rate = 2 }) {
    return (
        <Container>
            <Image src={image} />
            <div style={{ padding: 15 }}>
                <Title>{title}</Title>
                <SubTitle>{text}</SubTitle>
                <Row>
                    <Rating readOnly value={rate}
                        style={{ maxWidth: 140 }}
                        itemStyles={{
                            itemShapes: RoundedStar,
                            activeFillColor: "var(--primary)",
                            inactiveFillColor: "#eee"
                        }}

                    />
                    <Review>{review}</Review>
                </Row>
            </div>
        </Container>
    )
}
