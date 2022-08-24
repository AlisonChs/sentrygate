import {useContext, useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../../provider/Auth'
import './style.css'

export function RegisterSchool() {

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

          
                <h2>Faça o <span>cadastro</span> da sua <span> escola</span></h2>

                

        <form name='registration_form'>
          <input
            type='text'
            placeholder="Digite o nome da sua escola"
            required
          />

          <input 
            type='text' 
            placeholder="Escolha o tipo da sua escola"
            required
          />

          <input 
            type='tel'
            required
            placeholder='Preencha o DDD + número da sua escola'
            />

          <button type='submit' onClick={handleSubmit} >Cadastrar</button>
        </form>
      
      </div>
  )
}
