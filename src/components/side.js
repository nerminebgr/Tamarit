import React, { useContext, useState } from 'react'
import SideItem from './sideItem'
import { Category, Chart1, Document, GlobalEdit, Logout, Setting, Setting2, User, Wallet } from 'iconsax-react'
import styled  from 'styled-components'
import LoginContext from '../context/login'
import { Link } from 'react-router-dom';
const Title = styled.div`
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    line-height: 30px;
    margin-top: 15px;
    margin-bottom: 15px;
`
const Divider = styled.div`
    display: flex;
    height: 4px;
    background: var(--primary);
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    margin-top: .4em;
    margin-bottom: .4em;
`
const Image = styled.img`
    width: 75px;
    height: 70px;
    object-fit: contain;
    margin-top: 15px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
`

const Logo = styled.img`
    width: 173px;
    height: 61px;
    object-fit: contain;
    margin-top: 4px;
    margin-left: 0;
    margin-right: auto;
`

export default function Side() {
    const [active, setActive] = useState(0)
    const { userName } = useContext(LoginContext)
    return (
        <div>
            <Logo src='logo.png' />
            <Image src='profile.png' />
            <Title>{userName}</Title>
            <SideItem text={"Dashboard"} onClick={() => setActive(0)} active={active == 0} Icon={Category} />
            <SideItem text={"Statistique"} onClick={() => setActive(1)} active={active == 1} Icon={Chart1} />
            <Link id="nav-item"to="/monforme">
            <SideItem text={"Ajouter site"} onClick={() => setActive(2)} active={active == 2} Icon={Document} />
            </Link>
            <SideItem text={"Modifier site"} onClick={() => setActive(3)} active={active == 3} Icon={GlobalEdit} />
            <SideItem text={"Setting"} onClick={() => setActive(4)} active={active == 4} Icon={Setting2} />
            <SideItem text={"Profile"} onClick={() => setActive(5)} active={active == 5} Icon={User} />
            <Divider />
            <SideItem text={"Log out"} active={false} Icon={Logout} />
        </div>
    )
}
