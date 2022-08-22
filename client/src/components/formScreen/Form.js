import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useContext } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'
import useAuth from '../../hooks/useAuth'
import Axios from "axios"

import './form.css'

export function Form() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

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
                    navigate('/boletim')
                } else {
                    alert("Email ou senha invalidos");
                }
            });
        }
    };


    //console.log(text)

    return (
        <div className="contentForm">
            <form className='form'>
                <div className="screen">
                    <h2>Acesse a sua <span>conta</span></h2>
                    <div className="contentMid">
                        <select name="usuario">
                            <option>Entrar como</option>
                            <option>Aluno</option>
                            <option>Professor</option>
                            <option>Coordenador</option>
                        </select>
                        <input
                            type="text"
                            //value={code}
                            placeholder="Código"
                            name="code"
                        />
                    </div>
                    <input
                        type="email"
                        name="emailUsuario"
                        required=""
                        placeholder="Insira o email"
                        value={email}
                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                    //onChange={handleChangeValues}
                    />
                    <input
                        type="password"
                        //value={password}
                        name="senhaUsuario"
                        required=""
                        placeholder="Insira a senha"
                        //onChange={handleChangeValues}
                        onChange={(e) => [setSenha(e.target.value), setError("")]}
                    />
                    <button type='submit' name="login" className="button" onClick={() => handleLogin()}>Entrar</button>
                </div>
            </form>
        </div>
    )
}