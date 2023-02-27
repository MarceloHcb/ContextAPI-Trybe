import React from 'react'
import BackGround from './components/BackGround/BackGround'
import { AuthProvider } from './context/auth'
import RouteApp from './routes'
import GlobalStyle from './styles/Global'

const App = () => {
  return (
    <AuthProvider>
    <RouteApp />
    <BackGround />
    <GlobalStyle />
    </AuthProvider>
  )
}

export default App