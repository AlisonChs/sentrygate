import './form.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


export function Form() {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    console.log(text)

    return(
        <div className="contentForm">
            <form className='form'>
                <div className="screen">
                    <h2>Acesse a sua <span>conta</span></h2>
                    <div className="contentMid">
                        <select name="usuario">
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
                        />
                    </div>
                    <input 
                    type='email'
                    name="email" 
                    placeholder="Insira o Email"
                    />
                    <input 
                    type='password'
                    value={password} 
                    name="password" 
                    placeholder="Insira a senha"  
                    />
                    <button type='submit' className="button" >Entrar</button>
                </div>
            </form>
        </div>
    )
}