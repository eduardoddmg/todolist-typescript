import React, { useEffect } from "react";
import {
  Navbar,
  LinkNavbarLogo,
  LinkNavbarItem,
  ContainerPrincipal,
  ContainerPrincipalSub,
  ContainerPrincipalSubImg,
  ContainerPrincipalSubText,
  SubTextSpan,
  ContainerCard,
  Card,
  CardTitle,
  CardText,
  Footer,
  FooterText,
  TextLinkEdu
} from "./styled.js";
import { GrStackOverflow, GrEdit } from "react-icons/gr";
import {FaCheckSquare} from 'react-icons/fa'
import { BsPencilFill } from 'react-icons/bs';

const LandingPage = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div>
      <Navbar>
        <LinkNavbarLogo to="/">TODOLIST</LinkNavbarLogo>
        <LinkNavbarItem to="/app">APP</LinkNavbarItem>
      </Navbar>
      <ContainerPrincipal>
        <ContainerPrincipalSub>
          <ContainerPrincipalSubText>
            A MELHOR MANEIRA DE SE ORGANIZAR É COM{" "}
            <SubTextSpan>TODOLIST</SubTextSpan>
          </ContainerPrincipalSubText>
        </ContainerPrincipalSub>
        <ContainerPrincipalSub>
          <ContainerPrincipalSubImg
            src={require("../../assets/principal.png")}
            alt="principal"
          />
        </ContainerPrincipalSub>
      </ContainerPrincipal>
      <ContainerCard>
        <Card>
          <GrStackOverflow
            style={{ color: "#EC7F1B", fontWeight: "bold", fontSize: "50px" }}
          />
          <CardTitle>Criar Tarefas</CardTitle>
          <CardText>
            Com o Todolist, é possível criar tarefas com muita facilidade
          </CardText>
        </Card>
        <Card>
          <FaCheckSquare
            style={{ color: "#EC7F1B", fontWeight: "bold", fontSize: "50px" }}
          />
          <CardTitle>Organizar Tarefas</CardTitle>
          <CardText>
            Com o Todolist, é possível organizar tarefas com muita facilidade
          </CardText>
        </Card>
        <Card>
          <BsPencilFill
            style={{ color: "EC7F1B", fontWeight: "bold", fontSize: "50px" }}
          />
          <CardTitle>Editar Tarefas</CardTitle>
          <CardText>
            Com o Todolist, é possível Editar tarefas com muita facilidade
          </CardText>
        </Card>
      </ContainerCard>
      <ContainerPrincipal>
        <ContainerPrincipalSub>
          <ContainerPrincipalSubImg
            src={require("../../assets/mockup.png")}
            alt="principal"
          />
        </ContainerPrincipalSub>
        <ContainerPrincipalSub>
          <ContainerPrincipalSubText>
            SE ORGANIZA COM A {" "}
            <SubTextSpan>MELHOR PLATAFORMA DE TODOLIST</SubTextSpan>
          </ContainerPrincipalSubText>
        </ContainerPrincipalSub>
      </ContainerPrincipal>
      <Footer>
        <FooterText>
          DESENVOLVIDO POR {" "}
          <TextLinkEdu href="https://github.com/eduardoddmg" target="_blank">EDUARDO MELO</TextLinkEdu>
        </FooterText>
      </Footer>
    </div>
  );
};

export default LandingPage;
