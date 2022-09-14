

import {useContext, useState} from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Slider from '@mui/material/Slider';


import './register.css'

export function RegisterTeacher() {

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

    // Guarda os valores inseridos no INPUT
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
            title: "Insira o ",
            span: "nome",
            subtitle: " do aluno"
        },
        {
            id: "USER",
            title: "Insira o ",
            span: "e-mail",
            subtitle: " do aluno"
        },
        {
            id: "PASSWORD",
            title: "Escreva a  ",
            span: "senha ",
            subtitle: " que o aluno escolheu"
        },
        {
            id: "CONFIRMPASSWORD",
            title: "Por favor, confirme a ",
            span: "senha",
            subtitle: " que o aluno escolheu"
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

    const customNextButton = {
      transition: "all 0.5s ease-out",
      borderRadius: "17%",
      width: "35px",
      textAlign: "center",
      height: "35px",
      backgroundColor: "#371E5F",
      borderColor: "#371E5F",
      "&:hover": {
        borderColor: "#371E5F",
        transform: "rotateZ(360deg)"
      },
    }

    const registerButton = {
        backgroundColor: "#210B43",
        color: "orange",
        fontWeight: "bold",
        borderRadius: "15px",
        "&:hover": {
          color: "orange",
          backgroundColor: "#371E5F"
        }
      }
      
    function onSubmit (e) {
        e.preventDefault();
    };

    function handleStep(to) {
      setIsInputChanged(false);
  
      if (to === "next") {
        setCurrentStep((prevState) => prevState + 1);
      }
  
      else if (to === "back") {
        setCurrentStep((prevState) => prevState - 1);    
      }

      else {
        alert("Houve um erro ao avancar de página")
      }
    }

    const handleChangeValues = (value) => {
      setIsInputChanged(!values.any ? false : true);
      setValues((prevValue) => ({
          ...prevValue,
          [value.target.name]: value.target.value,
      }));
    };

    const customSlider = {
        
        width: "100%"
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


{currentStep > 0 && (

    <IconButton sx={CustomBackButton} onClick={() => handleStep("back")} fontaria-label="back to select page">
      <ChevronLeftIcon sx={{color: "white"}} fontSize="large"/>
    </IconButton> 

)}

       

      <form name='registration_form' onSubmit={onSubmit}>

      <Slider sx={customSlider} value={currentStep} step={1} marks min={0} max={3} disabled />

      {steps[currentStep].id === 'USERNAME' && (
        <>
                <h2>{steps[currentStep].title} <span>{steps[currentStep].span}</span>{steps[currentStep].subtitle}</h2>

                <input
                  type='text'
                  onChange={handleChangeValues}
                  value={values.name}
                  placeholder="Digite o nome e sobrenome aqui"
                  name='name'
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
                  value={values.email}
                  onChange={handleChangeValues}
                  placeholder="Digite o e-mail aqui"
                  required
                />

        </>
      )}
      {steps[currentStep].id === 'PASSWORD' && (
        <>
                <h2>{steps[currentStep].title} <span>{steps[currentStep].span}</span>{steps[currentStep].subtitle}</h2>


          <input 
            type='password'
            onChange={handleChangeValues}
            name='password'
            value={values.password}
            required
            placeholder='Digite sua senha'
            />

        </>
      )}
      {steps[currentStep].id === 'CONFIRMPASSWORD' && (
        <>
                <h2>{steps[currentStep].title} <span>{steps[currentStep].span}</span>{steps[currentStep].subtitle}</h2>
                
                <input 
            type='password'
            onChange={handleChangeValues}
            name='confirmPassword'
            value={values.confirmPassword}
            required
            placeholder='Confirme sua senha'
            />

        </>
      )}

      {currentStep < 3 && (

      !isInputChanged ? <IconButton aria-label="next" sx={{width: "30px", height: "30px", color: "orange", backgroundColor: "#371E5F", marginLeft: "49%"}}>
      <ChevronRightIcon onClick={() => handleStep("next")}/>
      </IconButton> : null
      
      )}

        {currentStep >= 3 && (

        !isInputChanged ? <IconButton aria-label="next" sx={{width: "30px", height: "30px", marginLeft: "49%"}}>
            <Button variant="contained" sx={registerButton}><SendIcon /></Button>
            
        </IconButton> : null

        )}


      
      
      </form>
      
      </div>
      </div>
  )
}
