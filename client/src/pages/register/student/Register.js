import {useContext, useState} from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import './register.css'

export function RegisterStudent() {

  const [isInputChanged, setIsInputChanged] = useState (true);

    const LoadingStyles = {
      color: "white",
      borderColor: "transparent",
      borderRadius: "0.5rem",
      transition: "all 0.5s ease-out",
      fontWeight: "bold",
      backgroundColor: "#5819BB",
      "&:hover": {
        borderColor: "transparent",
        padding: "0.5rem 1rem",
        backgroundColor: "#5819BB",
        cursor: "pointer",
        filter: "drop-shadow(5px 5px 0px #210D41)",
      },
    }

  const [values, setValues] = useState({
    name: "",
    code: "",
    email: "",
    confirmPassword: "",
    password: "",
  });

  const [currentStep, setCurrentStep] = useState(0)

    const steps = [
        {
            id: "USERNAME",
            title: "Primeiro, insira seu ",
            span: "nome",
        },
        {
            id: "SCHOOLID",
            title: "Insira o ",
            span: "código",
            subtitle: " da sua escola"
        },
        {
            id: "USER",
            title: "Insira o seu ",
            span: "e-mail",
            subtitle: " e escolha uma senha"
        },
        {
            id: "CONFIRMPASSWORD",
            title: "Por favor, confirme sua ",
            span: "senha",
        }
    ];

    const CustomBackButton = {
      position: "absolute", 
      top: "14px", 
      left: "5px",
      transition: "all 0.5s ease-out",
      "&:hover": {
        transform: "rotateZ(360deg)"
      },
    }

    function handleNextStep () {
        setCurrentStep((prevState) => prevState +1)
    }

    function handlePrevStep () {
        setCurrentStep((prevState) => prevState -1)
    }


  return (

    
  <div className="flex">

    {/* Animação de estrelas do fundo da tela */}
    <div className="stars">
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>
    
      <div className='auth'>


{currentStep > 1 && (
    <IconButton sx={CustomBackButton} onClick={handlePrevStep} fontaria-label="back to select page">
      <ChevronLeftIcon sx={{color: "white"}} fontSize="large"/>
    </IconButton> 

)}

       

      <form name='registration_form'>

      {steps[currentStep].id === 'USERNAME' && (
        <>
                <h2>{steps[currentStep].title} <span>{steps[currentStep].span}</span></h2>

                <input
                  type='text'
                  placeholder="Digite seu nome e sobrenome"
                  name='name'
                  required
                />

        </>
      )}
      {steps[currentStep].id === 'SCHOOLID' && (
        <>
                <h2>{steps[currentStep].title} <span>{steps[currentStep].span}</span>{steps[currentStep].subtitle}</h2>

                <input 
                  type='text' 
                  name='code'
                  placeholder="Digite o código de sua escola"
                  required
                />

        </>
      )}
      {steps[currentStep].id === 'USER' && (
        <>
                <h2>{steps[currentStep].title} <span>{steps[currentStep].span}</span>{steps[currentStep].subtitle}</h2>

                
          <input 
            type='email' 
            name='email'
            placeholder="Digite seu email"
            required
            />

          <input 
            type='password'
            name='password'
            required
            placeholder='Digite sua senha'
            />

        </>
      )}
      {steps[currentStep].id === 'CONFIRMPASSWORD' && (
        <>
                <h2>{steps[currentStep].title} <span>{steps[currentStep].span}</span></h2>
                
                <input 
            type='password'
            name='confirmPassword'
            required
            placeholder='Confirme sua senha'
            />

        </>
      )}


<Button sx={{borderRadius: "", width: "0"}} variant="outlined" onClick={handleNextStep} startIcon={<ChevronRightIcon />} />


      <LoadingButton loading={isInputChanged ? true : false} sx={LoadingStyles} variant="outlined">
       Cadastrar
      </LoadingButton>        
      
      </form>
      
      </div>
      </div>
  )
}
