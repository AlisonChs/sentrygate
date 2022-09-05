import './grading.css'
import { useState } from 'react';
import Axios from "axios";

export function Grading() {

  const [values, setValues] = useState({
    avaliacao1: "",
    mencao1: "",
    avaliacao2: "",
    mencao2: "",
    avaliacao3: "",
    mencao3: "",
    avaliacao4: "",
    mencao4: "",
    mencaof: "",
  })

  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value
    }))
  }

  const handleGrades = () => {
    const avaliacao1 = values.avaliacao1;
    const mencao1 = values.mencao1;
    const avaliacao2 = values.avaliacao2;
    const mencao2 = values.mencao2;
    const avaliacao3 = values.avaliacao3;
    const mencao3 = values.mencao3;
    const avaliacao4 = values.avaliacao4;
    const mencao4 = values.mencao4;
    const mencaof = values.mencaof;

    if (avaliacao1 === '' || mencao1 === '' || avaliacao2 === '' || mencao2 === '' || 
    avaliacao3 === '' || mencao3 === '' || avaliacao4 === '' || mencao4 === '' || mencaof === '') {
      alert('Preencha todos os campos');
    } else {
      Axios.post("http://localhost:3001/grading", {
        avaliacao1: avaliacao1,
        mencao1: mencao1,
        avaliacao2: avaliacao2,
        mencao2: mencao2,
        avaliacao3: avaliacao3,
        mencao3: mencao3,
        avaliacao4: avaliacao4,
        mencao4: mencao4,
        mencaof: mencaof,
      }).then((response) => {
        let message = response.data.message

        if (message = 'Notas Enviadas') {
          alert('Notas Enviadas')
        } else {
          alert('Algo deu errado')
        }
      });
    }
  }



  return (
    <div className="App">
      <form className='form'>
        <div className="screen">
          <div>
            <input
              type="text"
              placeholder="Método de Avaliação"
              className='ev'
              name='avaliacao1'
              required=""
              onChange={handleChangeValues}
            />
            <input
              type="text"
              placeholder="Menção"
              className='nota'
              name="mencao1"
              required=""
              onChange={handleChangeValues}
            />
            <input
              type="text"
              placeholder="Método de Avaliação"
              className='ev'
              name='avaliacao2'
              required=""
              onChange={handleChangeValues}
            />
            <input
              type="text"
              placeholder="Menção"
              className='nota'
              name="mencao2"
              required=""
              onChange={handleChangeValues}
            />
            <input
              type="text"
              placeholder="Método de Avaliação"
              className='ev'
              name='avaliacao3'
              required=""
              onChange={handleChangeValues}
            />
            <input
              type="text"
              placeholder="Menção"
              className='nota'
              name="mencao3"
              maxLength={10}
              minLength={0}
              required=""
              onChange={handleChangeValues}
            />
            <input
              type="text"
              placeholder="Método de Avaliação"
              className='ev'
              name='avaliacao4'
              required=""
              onChange={handleChangeValues}
            />
            <input
              type="text"
              placeholder="Menção"
              className='nota'
              name="mencao4"
              required=""
              onChange={handleChangeValues}
            />
            <br></br>
            <span className='final'>Menção Final: </span>
            <input
              type="text"
              placeholder='...'
              className='nota'
              name="mencaof"
              required=""
              onChange={handleChangeValues}
            />
          </div>


          <button type="submit" className='calc' onClick={() => handleGrades()}>Enviar</button>
        </div>
      </form>
    </div>
  );
}