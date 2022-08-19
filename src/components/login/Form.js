import './form.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../provider/Auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';


export function Form() {
    const [text, setText] = useState('')
    const [email, setEmail] = useState('')
    const [rm, setRM] = useState('')
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const { user, setUser } = useContext(AuthContext)
    const [ currentUser, setCurrentUser ] = useState('')

    const [currentStep, setCurrentStep] = useState(0)
    
    const steps = [
        {
            id: "USER",
            title: "Selecionar usuário"
        },
        {
            id: "LOGIN",
            title: "Inserir login e senha"
        }
    ];

    function handleNextStep () {
        setCurrentStep((prevState) => prevState +1)
    }

    function handlePrevStep () {
        setCurrentStep((prevState) => prevState -1)
    }

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
            
                    <div className="screen">

                         {steps[currentStep].id === 'USER' && (
                        
                        <><><h2 className='formTitle'> Acesse a sua <span> conta</span></h2>
                        <div className="contentMid">
                            
                                <select className="selectAluno" name="usuario" onChange={e => setCurrentUser(e.target.value)}>
                                    <option value='Estudante'>Aluno</option>
                                    <option value='Professor'>Professor</option>
                                    <option  value='Coordenador'>Coordenador</option>
                                </select>
                                
                            </div></></>

                                )} {steps[currentStep].id === 'LOGIN' && (

                                <><h2 className='formTitle'> Olá, <span> {currentUser=='' ? <p>Estudante </p> : currentUser}</span></h2>
                                <input
                                type='email'
                                name="email"
                                placeholder="Insira o Email" /><input
                                    type='password'
                                    name="password"
                                    placeholder="Insira a senha" />
                                    
                                    </>
                                    )}

{currentStep < steps.length - 1 && (
                                      <FontAwesomeIcon onClick={handleNextStep} size="xl" color='white' icon={faAngleRight} />

)}

{currentStep === steps.length - 1 && (
                                          <><FontAwesomeIcon className="backButton" onClick={handlePrevStep} size="xl" color='white' icon={faAngleLeft} /><button type='submit' className="button" onClick={handleSubmit}>Entrar</button></>

)}


                    </div>
                </form>

                
            </div>
        </div>
    )
}