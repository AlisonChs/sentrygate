
import './form.css';
import { useState, useEffect } from "react";
import { useContext } from "react";
import Context from '../../contexts/Context'
import Button from '@mui/lab/LoadingButton';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


export default function Inputs({ currentUser, setCurrentUser, email, senha, setEmail, setSenha}) {

    const { auth, setAuth, user, setUser } = useContext(Context)

    const CustomBackButton = {
      position: "absolute", 
      top: "14px", 
      left: "5px",
      transition: "all 0.5s ease-out",
      "&:hover": {
        transform: "rotateZ(360deg)"
      },
    }

  return (
    <div>

      <IconButton sx={CustomBackButton} onClick={() => setCurrentUser(null)} fontaria-label="back to select page">
        <ChevronLeftIcon sx={{color: "white"}} fontSize="large"/>
      </IconButton>   
      <div className='loginInput'>
        <div>
          <h2 className="formTitle">
            Olá, <span> {currentUser}</span>
          </h2>
        </div>
        <div>
          <input type="email" value={email} name="emailUsuario" onChange={e => setEmail(e.target.value)} placeholder="Insira o Email" />
        </div>
        <div>
          <input type="password" value={senha} name="senhaUsuario" onChange={e => setSenha(e.target.value)} placeholder="Insira a senha" />
        </div>
      </div>

    </div>
  );
}