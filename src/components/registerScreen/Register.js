import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './register.css'
import { auth } from '../data/firebase'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { useAuthValue } from '../../AuthContext' 

export function Register() {

  const [name, setName] = useState('')
  const [code, setCode] = useState('')  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {setTimeActive} = useAuthValue()

  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Senha incorreta')
      }
    }
    return isValid
  }

  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
      // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    setTimeActive(true)
                    navigate('/verify-email')
                }).catch((err) => alert(err.message))
          })
        
    }
    setName('')
    setCode('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className='center'>
      <div className='auth'>
        <h1>Cadastro</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={register} name='registration_form'>
          <input
            type='text'
            value={name}
            placeholder="Digite seu nome e sobrenome"
            required
            onChange={e => setName(e.target.value)}
          />

          <input 
            type='text' 
            value={code}
            placeholder="Digite o código de sua escola"
            required
            onChange={e => setCode(e.target.value)}/>

          <input 
            type='email' 
            value={email}
            placeholder="Digite seu email"
            required
            onChange={e => setEmail(e.target.value)}/>

          <input 
            type='password'
            value={password} 
            required
            placeholder='Digite sua senha'
            onChange={e => setPassword(e.target.value)}/>

            <input 
            type='password'
            value={confirmPassword} 
            required
            placeholder='Confirme sua senha'
            onChange={e => setConfirmPassword(e.target.value)}/>

          <button type='submit'>Cadastrar</button>
        </form>
        <span>
          Já possui uma conta?  
          <Link to='/login'>login</Link>
        </span>
      </div>
    </div>
  )
}
