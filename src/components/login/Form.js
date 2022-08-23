import './form.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react';
import Select from 'react-select';
import { AuthContext } from '../../provider/Auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function SelectUser () {

    const userOptions = [
        {
            label:"Aluno", value:"estudante"
        },
        {
            label:"Professor", value:"professor"
        },
        {
            label:"Coordenador", value:"coordenador"
        },
        {
            label:"Responsável", value:"responsável"
        }
    ];
    
    const customStyles = {
        control: (base, state) => ({
          ...base,
          background: "#200B41",
          border: 0
        }),
        menu: base => ({
          ...base,
          marginTop: 0,
          background: "#200B41",
          color: "white",
          "&:hover": {
            color: 'black'
        }
        }),
        menuList: base => ({
          ...base,
          // kill the white space on first and last option
          padding: 0
        })
      };


    <Select
        options={userOptions} 
        name="usuario"
        styles={customStyles}
        onChange={e => setCurrentUser(e.value)}
        defaultValue={{label: "Quem você é?", value: ""}}
    >
        
    </Select>

}


export function Form() {
    const [text, setText] = useState('')
    const [email, setEmail] = useState('')
    const [rm, setRM] = useState('')
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    // const [ currentUser, setCurrentUser ] = useState(null)


    const { user, setUser } = useContext(AuthContext)

    const [currentStep, setCurrentStep] = useState(0)
    
    // Passo a passo para o usuário preencher o FORM
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

    // Função para incrementar o contador e passar para a próxima seção
    function handleNextStep () {
        setCurrentStep((prevState) => prevState +1)
    }

    // Função para decrementar o contador e passar para a seção anterior
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

                                
                            </div></></>

                                )} {steps[currentStep].id === 'LOGIN' && (

                                <><h2 className='formTitle'> Olá, <span> {currentUser}</span></h2>
                                
                                <input
                                type='email'
                                name="email"
                                placeholder="Insira o Email" /><input
                                    type='password'
                                    name="password"
                                    placeholder="Insira a senha" />
                                    
                                    </>
                                    )}


{currentStep === steps.length - 1 && (
                                          <><FontAwesomeIcon className="backButton" onClick={handlePrevStep} size="xl" color='white' icon={faAngleLeft} />
                                          <button type='submit' className="button" onClick={handleSubmit}>Entrar</button></>

)}


                    </div>
                </form>

                
            </div>
        </div>
    )
}