import './form.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../provider/Auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


export function Form() {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const { user, setUser } = useContext(AuthContext)

    function handleSubmit() {
        setUser({ auth: true })

        navigate('/main')
    }

    return(

        <div className='flex'>
            <div className='stars'>
                <div className="starsec"></div>
                <div className="starthird"></div>
                <div className="starfourth"></div>
                <div className="starfifth"></div>
            </div>
        
            <div className="contentForm">
                
                <form className='form'>
                    <div>
                        
                        <h2 className='title'> Acesse a sua <span> conta</span></h2>
                    </div>

                   


                    
                    <div className="screen">

                         {/*
                        
                        
                        <div className="contentMid">
                            <select name="usuario">
                                <option>Aluno</option>
                                <option>Professor</option>
                                <option>Coordenador</option>
                            </select>
                            <input 
                                type="text"
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
                        name="password" 
                        placeholder="Insira a senha"  
    

                       
                        
                        <button type='submit' className="button" onClick={handleSubmit} >Entrar</button>

                        /> */}

                        <FontAwesomeIcon size="xl" color='white' icon={faAngleRight} />


                    </div>
                </form>

                
            </div>
        </div>
    )
}