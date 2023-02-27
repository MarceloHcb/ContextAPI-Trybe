import React, {useState} from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import * as C from './styles'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

function SignUp() {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("")
  const [senha,setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const { signup } = useAuth()

  const handleSignup = () => {
    if(!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    }else if (email !== emailConf) {
      setError("Os e-mails não são iguais")
      return;
    }

    const res = signup(email, senha) 

    if(res) {
      setError(res)
      return;
    }
    alert("Usuário cadastrado com sucesso!")
    navigate("/")
  }

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input
        type='email'
        placeholder='Digite seu Email'
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError('')]}
        />
         <Input
        type='email'
        placeholder='Confirme seu Email'
        value={emailConf}
        onChange={(e) => [setEmailConf(e.target.value), setError('')]}
        />
        <Input
        type='password'
        placeholder='Digite sua Senha'
        value={senha}
        onChange={(e) => [setSenha(e.target.value), setError('')]}
        />
      <C.LabelError>{error}</C.LabelError>
      <Button Text="Inscrever-se" onClick={handleSignup} />
      <C.LabelSignup>
          Já tem uma conta?
          <C.Strong>
            <Link to='/'>&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  )
}

export default SignUp