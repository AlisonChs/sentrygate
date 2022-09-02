import {useContext, useState} from 'react'
import LoadingButton from '@mui/lab/LoadingButton';

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

  return (
      <div className='auth'>
                <h2>Faça o seu <span>cadastro</span></h2>

        <form name='registration_form'>
          <input
            type='text'
            placeholder="Digite seu nome e sobrenome"
            name='name'
            required
          />

          <input 
            type='text' 
            name='code'
            placeholder="Digite o código de sua escola"
            required
          />

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

            <input 
            type='password'
            name='confirmPassword'
            required
            placeholder='Confirme sua senha'
            />

      <LoadingButton loading={isInputChanged ? true : false} sx={LoadingStyles} variant="outlined">
       Cadastrar
      </LoadingButton>        
      
      </form>
      
      </div>
  )
}
