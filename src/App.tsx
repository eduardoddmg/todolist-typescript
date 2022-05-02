import React from "react";
import { useState, FC, ChangeEvent, MouseEvent } from "react";
import {Routes, Route} from 'react-router-dom'
import { ToDo, Props } from "./Interfaces";
import LandingPage from './components/LandingPage/LandingPage';
import Todo from './components/Todo/Index/Todo'
import Erro from './components/Erro/Erro';

// laranja claro -> EC7F1B
// laranja escuro -> B75E0D

const App: FC = () => {
  const [tarefa, setTarefa] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [lista, setLista] = useState<ToDo[]>([]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<Todo />} />
      <Route path="*" element={<Erro />} />
    </Routes>
  );
};

export default App;
