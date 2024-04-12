import { SearchNormal } from 'iconsax-react'
import React from 'react'
import styled from 'styled-components'


const Input = styled.div`
    width: 300px;
    border: 1px solid #ddd;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border-radius: 4px;
`
const TextInput = styled.input`
    display: flex;
    flex: 1;
    font-size: 15px;
    border: 0;
    outline: none;
    padding-left: 10px;
`

export default function Search() {
    return (
        <Input>
            <SearchNormal size={18} color='var(--black)' />
            <TextInput />
        </Input>
    )
}
