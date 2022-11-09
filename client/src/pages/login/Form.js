import "./form.css";
import { Link, useNavigate } from "react-router-dom";
import { responseData } from '../../classes/ResponseData';
import { AlertNotFound } from './hooks/responses/AlertNotFound';
import { Context, useContext } from "react";
import Axios from 'axios';
import { useState, useEffect } from "react";
import { SelectUser } from "./Select";
import { Inputs } from "./Inputs";
import { Button } from "@mui/material";


export default function Form() {

  let navigate = useNavigate();

  // const { auth, setAuth, user, setUser } = useContext(Context)

  const [currentUser, setCurrentUser] = useState(null);

  const [emailInserido, setEmailInserido] = useState('')
  const [senhaInserida, setSenhaInserida] = useState('')

  function sucess () {navigate('/main')}
  function notfound () {alert('nao achou')}
  
    const handleLogin = () => {

      let userObj;

        if (emailInserido === "" || senhaInserida === "") {
            alert("Preencha todos os campos");
        } else {
            Axios.post("http://localhost:3001/login", {
                email: emailInserido,
                senha: senhaInserida,
            }).then((response) => {
              
              userObj = 'response' + response.status;

              new responseData(userObj, sucess, notfound).setItem('name', response.data.nome);
            
                }).catch((error) => {

                  userObj = 'response' + error.response.status;
          
                  new responseData(userObj, sucess, notfound);
          
                });

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
              <><Inputs
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    email={emailInserido}
                    senha={senhaInserida}
                    setEmail={setEmailInserido}
                    setSenha={setSenhaInserida}
                />
                    
                  <Button variant="contained" onClick={handleLogin} sx={loginBTN}>
                      Entrar
                    </Button></>
            )}
            
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
