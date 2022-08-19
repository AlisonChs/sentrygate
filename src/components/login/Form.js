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
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const { user, setUser } = useContext(AuthContext)

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
                    <div>
                        
                        <h2 className='title'> Acesse a sua <span> conta</span></h2>
                    </div>
            
                    <div className="screen">

                         {steps[currentStep].id === 'USER' && (
                        
                        
                        <><><div className="contentMid">
                                <select className="selectAluno" name="usuario">
                                    <option>Aluno</option>
                                    <option>Professor</option>
                                    <option>Coordenador</option>
                                </select>
                                
                            </div></></>

                                )} {steps[currentStep].id === 'LOGIN' && (

                                <><input
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
                                          <><FontAwesomeIcon className="backButton" onClick={handlePrevStep} size="x" color='white' icon={faAngleLeft} /><button type='submit' className="button" onClick={handleSubmit}>Entrar</button></>

)}


                    </div>
                </form>

                
            </div>
        </div>
    )
}