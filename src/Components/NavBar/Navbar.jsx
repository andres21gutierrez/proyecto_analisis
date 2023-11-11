// INSTALAR LIBRERIA STYLED COMPONENTS
// INSTALAR REACT ROUTER DOM

import styled from "styled-components";
import BurguerButton from "../BurgerButton/BurguerButton";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function NavBar(){

    const [clicked, setClicked] = useState(false)

    const handleClick = () =>{
        setClicked(!clicked)
    }

    const redictClose = (event) =>{
        handleClick();
    }

    const redict = (event) =>{
    }

    return(
        <div className="fixed w-screen z-[1000]">
            <NavContainer className="p-4 bg-red-600 flex items-center justify-between">
                <h2 className=" text-white text-sm md:text-lg">Stadium Departamental "Felix Capriles"</h2>
                <div className={`links ${clicked ? 'active' : '' }`}>
                    <div className="hover:scale-110 scale-100"><Link onClick={clicked ? redictClose : redict} to="/">Inicio</Link></div>
                    <div className="hover:scale-110 scale-100"><Link onClick={clicked ? redictClose : redict} to="/perfil">Perfil</Link></div>
                    <div className="hover:scale-110 scale-100"><Link onClick={clicked ? redictClose : redict} to="/eventos">Eventos</Link></div>
                    <div className="hover:scale-110 scale-100"><Link onClick={clicked ? redictClose : redict} >Contacto</Link></div>
                </div>
                <div className="burguer">
                    <BurguerButton clicked = {clicked} handleClick={handleClick}/>
                </div>
                <BgDiv className={`fixed bg-red-600 w-[100%] h-[100%] top-[-7000px] right-[-1000px] initial ${clicked ? 'active': ''}`}></BgDiv>
            </NavContainer>
        </div>
    )
}

const BgDiv = styled.div`
    transition: all .6s ease;
    &.active{
        border-radius: 0 0 0 80%;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
`

const NavContainer = styled.nav`
a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
}
.burguer{
    @media(min-width: 768px){
        display: none;
    }  
}
.links{
    position: absolute;
    top: -700px;
    right: -2000px;
    left: 0;
    display: flex;
    margin-left: auto;
    text-align:center;

    a{
        color: white;
        font-size: 2rem;
        display: block;

    }
    @media(min-width: 768px){
        position: initial;
        margin: 0;
        a{
            font-size: 1rem;
            color: white;
            display: inline;
        }
    }
}

.links.active{
    width: 100%;
    display: block;
    position: fixed;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    color: #333;
    transition: all .9s ease;
    a{
        font-size: 2rem;
        margin-top: 1rem;
        color: white;
    }
}
`