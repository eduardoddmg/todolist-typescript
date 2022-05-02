import styled from 'styled-components';
import { Checkbox } from '@chakra-ui/react'

interface CheckItem {
    bcolor: string;
}

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    padding-bottom: 6vh;
    background-color: #F6F7E0;
    margin-top: 5vh;
    border-radius: 10px;

    @media only screen and (max-width: 1000px)
    {
        width: 100%;
        margin: 10vh 0;
    }
`

// formulario

export const FormSubmit = styled.form`
    display: flex;
    padding: 3vh 8vh;
    width: 70%;
`

export const ButtonSubmit = styled.button`
    color: white;
    background-color: orange;
    padding: 1vh 2vh;
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;
`

// lista

export const Lista = styled.ul`
    list-style: none;
    padding: 2vh;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Item = styled.li<CheckItem>`
    padding: 1vh 2vh;
    background-color: ${p => p.bcolor};
    border-radius: 8px;
    margin: 1vh 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ItemLeft = styled.section`
    display: flex;
`

export const ItemRight = styled.section`
    display: flex;
`

export const CheckboxItem = styled(Checkbox)`
    margin: 0 1vh;
`

export const ButtonDelete = styled(ButtonSubmit)`
    background-color: red;
    border-radius: 50%;
`

// botao que apaga todas as tarefas

export const ButtonDeleteAll = styled(ButtonSubmit)`
    background-color: red;
`