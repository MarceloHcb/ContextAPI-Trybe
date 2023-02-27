import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import useAuth from '../../hooks/useAuth'
import oceano from '../../assets/oceano.mp4'
import * as C from './styles'

const Home = () => {
  const { signout} = useAuth()
  const navigate = useNavigate()

  return (
    <div> 
        <C.Container>    
      <C.Title> Home</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]} >
        Sair
      </Button>
    </C.Container>
    </div>
  )
}

export default Home