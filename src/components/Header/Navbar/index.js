import React, { useState, useContext } from 'react'
import { NavbarContainer, NavbarItemContainer } from './style'
import { Link } from 'react-router-dom'
import Burger from '../Burger'
import { styleContext } from '../../../context_providers/styleContext'
import { useLocation } from 'react-router-dom'

const NavbarItems = ({ name, destination, setNavbarIsActive }) => {
    const { tertiaryColor } = useContext(styleContext)
    const location = useLocation()

    return (
        <>
            <NavbarItemContainer onClick={() => {setNavbarIsActive(false)}} $tertiaryColor={tertiaryColor} $isNavigate={location.pathname === destination ? true : false}>
                <Link to={destination}> { name } 
                    <div className="underline"></div>
                </Link>
            </NavbarItemContainer>
        </>
    )
}

function Navbar() {
    const [navbarIsActive, setNavbarIsActive] = useState(false)
    const { primaryColor } = useContext(styleContext)


    return (
        <>
            <NavbarContainer $primaryColor={primaryColor} $navbarIsActive={navbarIsActive}>
                <NavbarItems setNavbarIsActive={setNavbarIsActive} name={"Home"} destination={"/home"}></NavbarItems>
                <NavbarItems setNavbarIsActive={setNavbarIsActive} name={"About Me"} destination={"/about"}></NavbarItems>
                <NavbarItems setNavbarIsActive={setNavbarIsActive} name={"Portfolio"} destination={"/portfolio"}></NavbarItems>
                <NavbarItems setNavbarIsActive={setNavbarIsActive} name={"Contact"} destination={"/contact"}></NavbarItems>
            </NavbarContainer>
            <Burger size={0.4} isActive={navbarIsActive} onClick={() => {setNavbarIsActive(!navbarIsActive)}}></Burger>
        </>
    )
}

export default Navbar