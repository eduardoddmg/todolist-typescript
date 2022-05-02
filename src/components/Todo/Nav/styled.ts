import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {AiOutlineHome, AiOutlineCheckSquare} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';

interface Props {
    padding: string;
    width: string;
}

interface Border {
    border: string;
}


export const Navbar = styled.nav`
    height: 100vh;
    background-color: black;
    padding: 0 1vh;
    left: 0;
    position: fixed;
`

export const GrupoNavbarLink = styled.a<Props>`
    display: flex;
    align-items: center;
    padding: ${p => p.padding};
    width: ${p => p.width || 'auto'};
`

export const NavbarLink = styled.a`
    color: white;
    padding: 2vh;
    font-weight: bold;
`

export const IconHome = styled(AiOutlineHome)`
    font-size: 45px;
    border-radius: 10px;
    color: white;
    padding: 1vh;
`

export const IconBurger = styled(GiHamburgerMenu)`
    font-size: 45px;
    border: 1px solid gray;
    border-radius: 10px;
    color: white;
    padding: 1vh;
`

export const IconCheck = styled(AiOutlineCheckSquare)`
  font-size: 45px;
  border-radius: 10px;
  color: white;
  padding: 1vh;
`;

export const  BtnIcon = styled.button<Border>`
    border: ${p => p.border || 'none'};
    border-radius: 8px;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 1vh;

    &:hover
    {
        background-color: gray;
        transition: 0.5s;
    }

    &:active 
    {
        background-color: gray;
    }
`

export const GrupoNavbarLinkBottom = styled(GrupoNavbarLink)`
    bottom: 10px;
`