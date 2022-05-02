import styled from "styled-components";
import {Link} from 'react-router-dom'

// navbar

export const Navbar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vh 5vh;
    background-color: #EC7F1B;
    color: white;
    top: 0;
    position: sticky;
`

export const LinkNavbar = styled(Link)`
    font-weight: bold;
`

export const LinkNavbarLogo = styled(LinkNavbar)`
    font-size: 30px;
`

export const LinkNavbarItem = styled(LinkNavbar)`
  font-size: 20px;
  padding: 2vh 3vh;
  background-color: #b75e0d;
  border-radius: 12px;
  display: flex;
  align-items: center;

  &:hover
  {
      background-color: black;
      transition: 0.5s;
  }
`;

// principal
export const ContainerPrincipal = styled.section`
  width: 100%;
  display: flex;

  @media only screen and (max-width: 1000px)
  {
    flex-direction: column-reverse;
  }
`
export const ContainerPrincipalSub = styled.section`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8vh 10vh;

  @media only screen and (max-width: 1000px)
  {
    width: 100%;
  }
`
export const ContainerPrincipalSubText = styled.h1`
  font-size: 40px;
  font-weight: bold;
  letter-spacing: -2px;
  width: 80%;
`

export const SubTextSpan = styled.span`
  color: #EC7F1B;
`

export const ContainerPrincipalSubImg = styled.img`
  width: 70%;
`
// cards

export const ContainerCard = styled(ContainerPrincipal)`
  flex-wrap: wrap;
  justify-content: center;
  padding: 7vh 0;

  @media only screen and (max-width: 1000px)
  {
    flex-direction: column;
    align-items: center;
  }
`

export const Card = styled.section`
  width: 20%;
  margin: 4vh;
  border-radius: 8px;
  background-color: rgb(242, 242, 242);
  padding: 3vh;

  @media only screen and (max-width: 1000px)
  {
    width: 90%;
    padding: 3vh 7vh;
  }
`;

export const CardTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`

export const CardText = styled.p`
  font-size: 18px;
`

// footer
export const Footer = styled.footer`
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  padding: 2vh;

  @media only screen and (max-width: 1000px)
  {
    padding: 4vh 2vh;
  }
`

export const FooterText = styled(ContainerPrincipalSubText)`
  font-size: 30px;
  width: 100%;
`

export const TextLinkEdu = styled.a`
  color: #EC7F1B;
  text-decoration: none;
`