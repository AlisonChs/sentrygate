import './form.css';
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"
import Context from '../../contexts/Context'
import Axios from 'axios';
{ /* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"; */ }
export function Inputs({ currentUser, setCurrentUser }) {


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

  let navigate = useNavigate();

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
          navigate("/main")
        } else {
          alert("Email ou senha invalidos");
        }
      });
    }
  };

  return (
    <div>
      <h2 className="formTitle">
        Olá, <span> {currentUser}</span>
      </h2>
      <input type="email" name="emailUsuario" required="" onChange={handleChangeValues} placeholder="Insira o Email" />
      <input type="password" name="senhaUsuario" required="" onChange={handleChangeValues} placeholder="Insira a senha" />
      { /* <FontAwesomeIcon
        className="backButton"
        onClick={() => setCurrentUser(null)}
        size="xl"
        color="white"
        icon={faAngleLeft}
      /> */}
      <button type="submit" onClick={() => handleLogin()} className="button">
        Entrar
      </button>
    </div>
  );
}
