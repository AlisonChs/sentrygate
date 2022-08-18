import { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../../provider/Auth'
import './register.css'

export function Register() {

  const [name, setName] = useState('')
  const [code, setCode] = useState('')  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()
  const { user, setUser } = useContext(AuthContext)

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
