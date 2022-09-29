import React from 'react'
import Quiz from '../../images/quiz.svg'
import { Button, Subtitle, Title, WelcomeDiv } from './styles';





function Welcome() {
  return (
    <WelcomeDiv>
      <Title>Seja Bem Vindo!</Title>
      <Subtitle>Clique no botao para comecar</Subtitle>
      <img src={Quiz} alt="Inicio do Quiz" />
      <Button>Iniciar</Button>
    </WelcomeDiv>
  )
}

export default Welcome;