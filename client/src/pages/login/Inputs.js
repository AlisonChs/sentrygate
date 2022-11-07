import './form.css';
import { useState, useEffect } from "react";
import { useContext } from "react";
import Context from '../../contexts/Context'
import Axios from 'axios';
import Button from '@mui/lab/LoadingButton';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { responseData } from '../../classes/ResponseData';

export function Inputs({ currentUser, setCurrentUser }) {

  // let navigate = useNavigate();

  const { auth, setAuth, user, setUser } = useContext(Context)

  const [values, setValues] = useState({
    emailUsuario: "",
    senhaUsuario: "",
  });



  const [style, setStyle] = useState("");

  const [isInputChanged, setIsInputChanged] = useState(true);

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

  const handleChangeValues = (value) => {
    setIsInputChanged(!values.any ? false : true)
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const CustomBackButton = {
    position: "absolute",
    top: "14px",
    left: "5px",
    transition: "all 0.5s ease-out",
    "&:hover": {
      transform: "rotateZ(360deg)"
    },
  }

  const email = values.emailUsuario;
  const senha = values.senhaUsuario;

  function sucess() { alert('Sucesso') }
  function notfound() { alert('Não Achou!') }



  const handleLogin = () => {

    if (email === "" || senha === "") {
      alert("Preencha todos os campos");
    } else {
      Axios.post("http://localhost:3001/login", {
        email: email,
        senha: senha,
      }).then((response) => {

        let userObj = 'response' + response.status;

        const responses = new responseData(userObj, sucess, notfound);

        console.log(responses)

      }).catch((error) => {

        let userObj = 'response' + error.response.status;

        const responses = new responseData(userObj, sucess, notfound);

        console.log(responses)
      });


      // Falta tratar os outros erros, vamos usar o https://axios-http.com/ptbr/docs/handling_errors

    }
  };

  return (
    <div>
      <IconButton sx={CustomBackButton} onClick={() => setCurrentUser(null)} fontaria-label="back to select page">
        <ChevronLeftIcon sx={{ color: "white" }} fontSize="large" />
      </IconButton>
      <div className='loginInput'>
        <div>
          <h2 className="formTitle">
            Olá, <span> {currentUser}</span>
          </h2>
        </div>
        <div>
          <input type="email" name="emailUsuario" onChange={handleChangeValues} placeholder="Insira o Email" />
        </div>
        <div>
          <input type="password" name="senhaUsuario" onChange={handleChangeValues} placeholder="Insira a senha" />
        </div>
      </div>

      <Button variant="contained" onClick={handleLogin} sx={loginBTN} >
        Entrar
      </Button>



    </div>
  );
}
