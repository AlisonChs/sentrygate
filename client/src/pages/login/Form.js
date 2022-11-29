import { useContext, useState } from "react";

import "./form.css";
import { useNavigate } from "react-router-dom";
import { responseData } from '../../classes/ResponseData';
import Axios from 'axios';
import { SelectUser } from "./Select";
import { Inputs } from "./Inputs";
import { Button, Stack } from "@mui/material";
import Context from "../../contexts/Context";


export function Form() {

  let navigate = useNavigate();

  const { setAuth, user, setUser, typeUser, setTypeUser } = useContext(Context)

  const [currentUser, setCurrentUser] = useState(null);

  const [emailInserido, setEmailInserido] = useState('')
  const [senhaInserida, setSenhaInserida] = useState('')
  
  console.log(typeUser)

  function sucess () {
    setAuth(true)
    setTypeUser(currentUser)
    navigate('/main')
  }

  function notfound () {alert('E-mail ou senha incorreta!')}
  
    const handleLogin = () => {

      if (emailInserido === `admin@admin`) {
        sucess()
      } else {
        notfound()
      }
        
    };

    
    const loginBTN = {
      color: "white",
      borderColor: "transparent",
      borderRadius: "0.5rem",
      marginTop: "15px",
      transition: "all 0.5s ease-out",
      fontWeight: "bold",
      backgroundColor: "#5819BB",
      "&:disabled": {
        borderColor: "transparent",
        padding: "0.5rem 1rem",
        backgroundColor: "#5819BB",
        cursor: "pointer",
        filter: "drop-shadow(5px 5px 0px #210D41)",
      },
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

      <div className="contentForm">
        <form className="form">
          <div className="screen">
                <div className="contentMid">

            {currentUser === null ? (
              <SelectUser setCurrentUser={setCurrentUser} />
            ) : (
              <Stack><Inputs
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    email={emailInserido}
                    senha={senhaInserida}
                    setEmail={setEmailInserido}
                    setSenha={setSenhaInserida}
                />
                    
                  <Button variant="contained" onClick={handleLogin} sx={loginBTN}>
                      Entrar
                  </Button>
                  
                </Stack>
            )}
            
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
