import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreProvider } from '../../../contexts/Provider'
import './register.css'

export function RegisterStudent() {

  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()
  const { user, setUser } = useContext(StoreProvider)

  function handleSubmit() {
    setUser({ auth: true })

    navigate('/main')
  }

  return (
    <div className='auth'>
      <h2>Faça o seu <span>cadastro</span></h2>

      <form name='registration_form'>
        <input
          type='text'
          placeholder="Digite seu nome e sobrenome"
          required
        />

        <input
          type='text'
          placeholder="Digite o código de sua escola"
          required
        />

        <input
          type='email'
          placeholder="Digite seu email"
          required
        />

        <input
          type='password'
          required
          placeholder='Digite sua senha'
        />

        <input
          type='password'
          required
          placeholder='Confirme sua senha'
        />

        <button type='submit' onClick={handleSubmit} >Cadastrar</button>
      </form>

    </div>
  )
}
