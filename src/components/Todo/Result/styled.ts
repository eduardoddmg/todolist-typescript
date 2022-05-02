import styled from 'styled-components'

export const Container = styled.section`
    width: 30%;
    height: 100vh;
    position: fixed;
    right: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F6F7E0;
    border-radius: 10px;

    @media only screen and (max-width: 1000px)
  	{
    	position: relative;
    	width: 100%;
    	right: 0;
    	margin: 2vh 0;
  	}
`

export const TextResult = styled.section`
	background-color: #D0D29E;
	color: black;
	padding: 2vh 4vh;
	margin: 6vh;
	border-radius: 8px;
	font-weight: bold;
`