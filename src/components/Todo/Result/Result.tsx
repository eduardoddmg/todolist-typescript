import React from 'react'
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Container, TextResult } from './styled';
import { ToDo } from '../Index/Todo'

interface ChildProps {
	lista: ToDo[]; 
  	setLista: React.Dispatch<React.SetStateAction<ToDo[]>>;
	countCheck: number;
	setCountCheck: React.Dispatch<React.SetStateAction<number>>;
}

const Result = ({ lista, setLista, countCheck, setCountCheck } : ChildProps) => {
  return (
    <Container>
      <h1 style={{fontSize: '40px', fontWeight: 'bold'}}>Seu rendimento</h1>
      <CircularProgress value={lista && lista.length > 0 ? countCheck*100/lista.length : 0} size='200px' color="green.400">
        <CircularProgressLabel>{lista && lista.length > 0 ? Math.floor(countCheck*100/lista.length) : 0}</CircularProgressLabel>
      </CircularProgress>
    	{lista &&  lista.length > 0 && <TextResult>
    		<h1>{Math.floor(countCheck*100/lista.length) < 100 || Math.floor(countCheck*100/lista.length) === 0 || countCheck === 0 ? 'Você ainda não bateu a sua meta :(' : 'Meus parabéns, você bateu a sua meta'} </h1>
    	</TextResult>}
    </Container>
  )
}

export default Result