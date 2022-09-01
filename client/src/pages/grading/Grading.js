import './grading.css'
import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
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

  const [grades, setGrades] = useState([{ id: uuidv4(), value: 0 }]);
  const [average, setAverage] = useState(0);

  const addGrade = () => {
    setGrades((grades) => [...grades, { id: uuidv4(), value: 0 }]);
  };

  const deleteGrade = (index) => {
    setGrades ((grades) => grades.filter((_, i) => i !== index));
  }; 

  const calculate = (e) => {
    e.preventDefault();
    const formValid = grades.every(({ value }) => !isNaN(+value));
    if (!formValid) {
      return;
    }
    setAverage(
      grades.map(({ value }) => value).reduce((a, b) => +a + +b, 0) /
      grades.length
    );
  };

  return (
    <div className="App">
      <form onSubmit={calculate} className='form'>
        <div className="screen">
          {grades.map((g, i) => {
            return (
              <div key={g.id}>
                <input 
                  type='text'
                  placeholder="Método de Avaliação"
                  className='ev'
                  name='avaliacao'
                  required=""
                  onChange={handleChangeValue}
                />
                <input
                  type='number'
                  placeholder="Nota"  
                  className='nota'
                  name='nota'
                  required=""
                  value={g.value}
                  onChange={ 
                    (e) => {              
                    const grds = [...grades];
                    grds[i].value = e.target.value;
                    setGrades(grds);
                  }}
                />
                <button type="button" className='delete' onClick={() => deleteGrade(i)}>
                  X
                </button>
              </div>
            );
          })}

          <button type="button" className='add' onClick={addGrade}>
            Adicionar Avaliação +
          </button>
          <button type="submit" className='calc' value="Enviar" onClick={() => handleGrades()}>Enviar</button>
          <div className='media'>Média: {average}</div>
        </div>
      </form>
    </div>
  );
}