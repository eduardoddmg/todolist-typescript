import React, { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import Dashboard from '../Dashboard/Dashboard'
import Result from '../Result/Result'
import { Container, Button } from './styled';
import { Link } from 'react-router-dom'

export interface ToDo {
	tarefa: string;
	id: number;
	check: boolean;
}

const Todo = () => {

	useEffect(() => {
		window.scrollTo(0,0);
	}, []);

  const [tarefa, setTarefa] = useState<string>('');
  const [lista, setLista] = useState<ToDo[]>([]);
  const [id, setId] = useState<number>(0);
  const [check, setCheck] = useState<boolean>(false);
  const [countCheck, setCountCheck] = useState<number>(0);

  return (
    <Container>
    	<Link to="/">
    			<Button style={{position: 'absolute', top: '10px', right: '20px', cursor: 'pointer', border: '1px styleolid black', padding: '1vh 2vh', borderRadius: '8px'}}>voltar</Button>
    	</Link>
        <Dashboard tarefa={tarefa} setTarefa={setTarefa} lista={lista} setLista={setLista} id={id} setId={setId} check={check} setCheck={setCheck} countCheck={countCheck} setCountCheck={setCountCheck} />
        <Result lista={lista} setLista={setLista} countCheck={countCheck} setCountCheck={setCountCheck} />
    </Container>
  )
}

export default Todo