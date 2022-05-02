import {useState} from 'react';
import {Navbar, GrupoNavbarLink, GrupoNavbarLinkBottom, NavbarLink, IconBurger, IconHome, IconCheck, BtnIcon} from './styled'

const Nav = () => {
    const [show, setShow] = useState<boolean>(false);

  return (
      <Navbar>
        <GrupoNavbarLink padding="2vh 0 10vh 0" width="auto">
          <BtnIcon border="none" onClick={() => setShow(!show)}>
            <IconBurger />
          </BtnIcon>
        </GrupoNavbarLink>
        <GrupoNavbarLinkBottom padding="2vh 0 2vh 0" width='100%'>
          <BtnIcon border={show ? "1px solid gray" : "none"}>
            <IconCheck />
            {show && <NavbarLink>Voltar</NavbarLink>}
          </BtnIcon>
        </GrupoNavbarLinkBottom>
      </Navbar>
  );
}

export default Nav