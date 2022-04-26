import React from "react";
import styled from "styled-components";
import { useState, FC, ChangeEvent, MouseEvent } from "react";
import {ToDo, Props} from './Interfaces'

const App: FC = () => {

  const [tarefa, setTarefa] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [lista, setLista] = useState<ToDo[]>([]);
  const [check, setCheck] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTarefa(e.target.value);
  }

  const criarTarefa = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setTarefa('');
    const newTarefa = {tarefa, id, check: false}
    tarefa && setLista([...lista, newTarefa]);
    console.log(lista);
  }

  return (
      <Principal>
        <Text>Todolist</Text>
        <PrincipalBottom>
          <Form>
            <Input type="text" placeholder="Tarefa..." value={tarefa} onChange={handleChange} />
            <SubmitButton type="submit" onClick={criarTarefa}>Criar</SubmitButton>
          </Form>
          <Lista>
            {lista && lista.map((valor, index) => {
              valor.id = index;
              return (
                <Item key={index}>
                  <SectionTarefa>
                    <InputCheckbox
                      type="checkbox"
                      defaultChecked={false}
                      onChange={(e) => {
                        setCheck(!check);
                        valor.check = e.target.checked;
                        console.log(lista);
                      }}
                    />
                    <TextItem color={valor.check ? 'gray' : 'black '} textDecoration={valor.check ? 'line-through' : 'none'}>{valor.tarefa}</TextItem>
                  </SectionTarefa>
                  <SectionBtn>
                    <ItemButtonDelete
                      onClick={() =>
                        setLista(lista.filter((val) => val.id !== index))
                      }
                    >
                      X
                    </ItemButtonDelete>
                  </SectionBtn>
                </Item>
              );
            })}
          </Lista>
        </PrincipalBottom>
        {lista && lista.length > 0 && <BtnClearAll onClick={() => setLista([])}>Apagar tudo</BtnClearAll>}
      </Principal>
  );
}

const Text = styled.h1`
  padding: 2vh 6vh;
  color: white;
  font-weight: bold;
`;

const Principal = styled.section`
  font-family: sans-serif;
  background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  min-height: 80vh;
  border: 4px solid black;
  margin: 4vh auto;
  border-radius: 5px;

  @media only screen and (max-width: 1000px)
  {
    width: 90%;
  }
`;
const PrincipalBottom = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Lista = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 0;
`;

const Item = styled.li`
  border: 1px solid white;
  padding: 2vh;
  font-size: 18px;
  width: 70%;
  margin: 2vh 0;
  border-radius: 4px;
  color: green;
  background-color: white;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    width: 90%;
  }
`;

const Input = styled.input`
  width: 40%;
  padding: 2vh;
  font-size: 18px;
  color: black;
  border: none;
  border-radius: 6px;

  @media only screen and (max-width: 1000px) {
    width: 70%;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 80%;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-weight: bold;
  padding: 1vh 2vh;
  border-radius: 6px;
  cursor: pointer;
`;

const InputCheckbox = styled.input`
  border-radius: 50%;
  border: 1px solid pink;
  width: 20px;
  height: 20px;
  margin-right: 1vh;
`

const ItemButtonDelete = styled(Button)`
  color: white;
  background-color: red;
  border-radius: 50%:
  position: relative;
  top: 0;
  right: 0;
`

const SubmitButton = styled(Button)`
  background-color: black;
  color: white;

  @media only screen and (max-width: 1000px) {
    width: 30%;
  }
`;

const SectionTarefa = styled.section`
  display: flex;
  align-items: start;
  width: 60%;
`

const SectionBtn = styled(SectionTarefa)`
  justify-content: end;
  width: 20%;
`

const TextItem = styled.h4<Props>`
  color: ${props => props.color || 'black'};
  text-decoration: ${props => props.textDecoration || 'none'};
  width: 80%;
  word-wrap: break-word;
`

const BtnClearAll = styled(Button)`
  background-color: red;
  color: white;
  padding: 2vh 4vh;
  margin: 2vh 0;
`

export default App;
