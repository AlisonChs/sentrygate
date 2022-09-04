import './grading.css'
import React, { useState } from 'react';
import { Axios } from "axios";

export default function Grading() {

  const [values, setValues] = useState({
    avaliacao: '',
    nota: ''
  })

  const handleChangeValue = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value
    }))
  }

  const handleGrades = () => {
    const avaliacao1 = values.avaliacao;
    const nota1 = values.nota;

    if (avaliacao1 === '' || nota1 === '' ) {
      alert('Preencha todos os campos');
    } else {
      Axios.post("http://localhost:3001/grading", {
        avaliacao: avaliacao1, 
        nota: nota1,
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
                  type='text'
                  placeholder="Método de Avaliação"
                  className='ev'
                  name='avaliacao'
                  required=""
                  onChange={handleChangeValue}
                />
                <input
                  type='text'
                  placeholder="Nota"  
                  className='nota'
                  name='nota'
                  required=""
                  onChange={handleChangeValue}
                />
              </div>
            
          
          <button type="submit" className='calc' value="Enviar" onClick={() => handleGrades()}>Enviar</button>
        </div>
      </form>
    </div>
  );
}