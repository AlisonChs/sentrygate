import './form.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../data/firebase';
import { useAuthValue } from '../../AuthContext';


export function Form() {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const login = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            if (!auth.currentUser.emailVerified) {
                alert("Email ou senha incorretos")
                .then(() => {
                    navigate('/')
                })
               .catch(err => alert(err.message)) 
            }else{
                navigate('/main')
            }
        })
        .catch(err => setError(error.message))
    }

    function handleText(event) {
        setText(prevValue => ({
            ...prevValue,
            [event.target.name]: event.target.value
            })
        )
    }

    console.log(text)

    return(
        <div className="contentForm">
            {error && <div className='auth__error'>{error}</div>}
            <form onSubmit={login} className='form'>
                <div className="screen">
                    <h2>Acesse a sua <span>conta</span></h2>
                    <div className="contentMid">
                        <select name="usuario" onChange={handleText}>
                            <option>Entrar como</option>
                            <option>Aluno</option>
                            <option>Professor</option>
                            <option>Coordenador</option>
                        </select>
                        <input 
                        type="text" 
                        value={code}
                        placeholder="Código" 
                        name="code" 
                        onChange={e => setCode(e.target.value)} />
                    </div>
                    <input 
                    type='email'
                    value={email} 
                    name="email" 
                    placeholder="Insira o Email" 
                    onChange={e => setEmail(e.target.value)} />
                    <input 
                    type='password'
                    value={password} 
                    name="password" 
                    placeholder="Insira a senha" 
                    onChange={e => setPassword(e.target.value)} />
                    <div className='cad'>
                        <p>Não é cadastrado?</p>
                        <Link to='/register'> <span>Crie uma conta</span></Link>
                    </div>
                    <button type='submit' className="button" >Entrar</button>
                </div>
            </form>
        </div>
    )
}