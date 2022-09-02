import './form.css';
import { useState } from "react";
import { useContext } from "react";
import Context from '../../contexts/Context'
import Axios from 'axios';
import { positions } from '@material-ui/system';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export function Inputs({ currentUser, setCurrentUser }) {

  // let navigate = useNavigate();

    const { auth, setAuth, user, setUser } = useContext(Context)

    const [values, setValues] = useState({
      emailUsuario: "",
      senhaUsuario: "",
    });

      
    const handleChangeValues = (value) => {
      setValues((prevValue) => ({
          ...prevValue,
          [value.target.name]: value.target.value,
      }));
    };

    const handleLogin = () => {
        let email = values.emailUsuario;
        let senha = values.senhaUsuario;

        if (email === "" || senha === "") {
            alert("Preencha todos os campos");
        } else {
            Axios.post("http://localhost:3001/login", {
                email: email,
                password: senha,
            }).then((response) => {

                let userObj = response.data;

                if (userObj.length === 1) {
                    alert("Login feito com sucesso");

                    setUser(userObj[0]);

                    //alterando a autenticação
                    setAuth(true)

                    //navegar a outra rota
                    // navigate("/main")
                } else {
                    alert("Email ou senha invalidos");
                }
            });
        }
    };

  return (
    <div>
      <IconButton sx={{position: "absolute", top: "14px", left: "5px"}} onClick={() => setCurrentUser(null)} fontaria-label="back to select page">
        <ChevronLeftIcon sx={{color: "white"}} fontSize="large"/>
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
    
      <button type="submit" onClick={() => handleLogin()} className="button">
        Entrar 
      </button>
    </div>
  );
}
