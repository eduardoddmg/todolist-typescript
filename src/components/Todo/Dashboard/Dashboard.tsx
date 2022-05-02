import {useState} from 'react';
import { Input, useToast, Checkbox } from "@chakra-ui/react";
import { Container, FormSubmit, ButtonSubmit, Lista, Item, ItemLeft, ItemRight, ButtonDelete, ButtonDeleteAll } from './styled';
import { ToDo } from '../Index/Todo'

interface ChildProps {
  tarefa: string;
  setTarefa: React.Dispatch<React.SetStateAction<string>>;
  lista: ToDo[]; 
  setLista: React.Dispatch<React.SetStateAction<ToDo[]>>;
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  countCheck: number;
  setCountCheck: React.Dispatch<React.SetStateAction<number>>;
}

const Dashboard = ({ tarefa, setTarefa, lista, setLista, id, setId, check, setCheck, countCheck, setCountCheck }: ChildProps) => {
  const toast = useToast();
  
  return (
    <Container>
        <FormSubmit>
            <Input placeholder='Sua tarefa...' value={tarefa} onChange={(e) => setTarefa(e.target.value)} />
            <ButtonSubmit type="submit" onClick={(e) => {
              e.preventDefault();
              if (tarefa)
              {
                  setLista([...lista, {tarefa, id, check}]);
                  setTarefa('');
                  console.log(lista);
              }
              toast({
                  title: tarefa ? 'Tarefa criada' : 'Algo deu errado :(',
                  description: tarefa ? "Muito bem, você criou uma tarefa" : "Você precisa digitar algo",
                  position: 'bottom-right',
                  status: tarefa ? 'success' : 'error',
                  duration: 4000,
                  isClosable: true,
                })
              }}>Enviar</ButtonSubmit>
        </FormSubmit>
        <Lista>
          {lista && lista.map((valueTarefa, index) => {
            valueTarefa.id = index;
            return (
              <Item
                key={index}
                bcolor={valueTarefa.check ? "#B6ECA1" : "#EFEBEA"}
              >
                <ItemLeft>
                  <Checkbox
                    size="lg"
                    colorScheme="green"
                    onChange={(e) => {
                      setCheck(!check)
                      valueTarefa.check = e.target.checked;
                      setCountCheck(lista.filter(val => val.check).length)
                    }}
                  />
                  <p style={{padding: '2vh'}}>
                    {valueTarefa.tarefa}
                  </p>
                </ItemLeft>
                <ItemRight>
                  <ButtonDelete
                    onClick={() => {
                      valueTarefa.check = false;
                      setLista(lista.filter((val) => val.id !== index));
                      setCheck(false);
                      setCountCheck(lista.filter(val => val.check).length);
                      }
                    }
                  >
                    X
                  </ButtonDelete>
                </ItemRight>
              </Item>
            );
          })}
        </Lista>
          {lista && lista.length > 0 && <ButtonDeleteAll onClick={() => {
            setLista([]);
            setCountCheck(0);
          }}>Apagar tudo</ButtonDeleteAll>}
    </Container>
  )
}

export default Dashboard