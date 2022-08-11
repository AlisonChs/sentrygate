import { useEffect } from 'react';
import { useState } from 'react';
import './style.css'

export function Call () {

    // UseState
    const [alunos, setAlunos] = useState([]);

    // UseEffects
    useEffect(()=>{

        fetch("localhost:8080/listar") // Consulta a api
        .then(retorno => retorno.json()) // Converte o retorno em JSON
        .then(retorno_convertido => setAlunos(retorno_convertido))

    }, []);

    console.log(alunos)
 
 return(
  
    <p>
        {JSON.stringify(alunos)}
    </p>

 )
}