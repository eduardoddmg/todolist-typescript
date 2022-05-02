import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    display: flex;

    @media only screen and (max-width: 1000px)
  	{
    	flex-direction: column;
  	}
`

export const Button = styled.button`
	position: absolute;
	top: 10px; 
	right: 20px; 
	cursor: pointer; 
	border: 1px solid black; 
	padding: 1vh 2vh;
	border-radius: 8px;
	font-weight: bold;

	&:hover
	{
			background-color: black;
			color: white;
			transition: 0.5s;
	}
`