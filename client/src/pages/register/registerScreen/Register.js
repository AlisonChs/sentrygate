import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Axios from 'axios'
import './register.css'

export function Register() {

  const [values, setValues] = useState({
    nomeUsuario: '',
    cdgescolaUsuario: '',
    emailUsuario: '',
    senhaUsuario: ''
  })


  const handleChangeValue = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value
    }))
  }

  let navigate = useNavigate();


  const handleRegister = () => {
    const nome = values.nomeUsuario;
    const cdgescola = values.cdgescolaUsuario;
    const email = values.emailUsuario;
    const senha = values.senhaUsuario;

    if (nome === '' || cdgescola === '' || email === '' || senha === '') {
      alert('Preencha todos os campos');
    } else {
      Axios.post("http://localhost:3001/register", {
        name: nome,
        cdgescola: cdgescola,
        email: email,
        password: senha,
      }).then((response) => {

        let message = response.data.message

        if (message = 'Usuario cadastrado') {

          alert('Usuario cadastrado')
          navigate("/main")
        } else {
          alert('Algo deu errado')
        }
      });
    }
  }
  return (
    <div className='center'>
      <div className='auth'>
        <form name='registration_form'>
          <h2>Faça o seu <span>cadastro</span></h2>
          <input
            type='text'
            placeholder="Digite seu nome e sobrenome"
            name="nomeUsuario"
            required=""
            onChange={handleChangeValue}
          />

          <input
            type='text'
            placeholder="Digite o código de sua escola"
            name="cdgescolaUsuario"
            required=""
            onChange={handleChangeValue}
          />

          <input
            type='email'
            placeholder="Digite seu email"
            name="emailUsuario"
            required=""
            onChange={handleChangeValue}
          />

          <input
            type='password'
            name="senhaUsuario"
            required=""
            placeholder='Digite sua senha'
            onChange={handleChangeValue}
          />

          <input
            type='password'
            required=""
            placeholder='Confirme sua senha'
          />

          <button type=" submit" name="cadastrar" value="Cadastrar" onClick={() => handleRegister()}>Cadastrar</button>
        </form>
        <span>
          Já possui uma conta?
          <Link to='/'> Login</Link>
        </span>
      </div>
    </div>
  )
}
