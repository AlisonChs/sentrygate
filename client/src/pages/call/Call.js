import { useState } from "react";

import { Avatar, Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Skeleton, Stack, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import Carousel from "react-bootstrap/Carousel";
import TopBar from "../../components/UI/navbar/TopBar/TopBar";

import './call.css'

export function Call() {
  const student = [
    {
      id: Math.random(),
      name: "Alison Leão",
      rm: "10841267",
      photo: "https://github.com/AlisonChs.png",
      presenca: true
    },
    {
      id: Math.random(),
      name: "Victor Hugo Carvalho Moreira dos Santos",
      rm: "10347",
      photo: "https://github.com/Victor-HM.png",
      presenca: true
    },
    {
      id: Math.random(),
      name: "Bruno Clavo Barbosa",
      rm: "10847",
      photo: "https://github.com/BrunoDeSP.png",
      presenca: true
    },
    {
      id: Math.random(),
      name: "Felipe Dourado",
      rm: "101147",
      photo: "https://github.com/FS-Dourado.png",
      presenca: true
    },
  ];

  
  const [counter, setCounter] = useState(0);
  const [alunoAtual, setAlunoAtual] = useState(student);
  const columns = [
    {
      field: 'rm',
      headerName: 'RM',
      type: 'number',
      width: 110,
    },
    {
      field: 'photo',
      headerName: 'Photo',
      width: 150,
    },
    {
      field: 'name',
      headerName: 'Nome',
      width: 150,
    },
    {
      field: 'presenca',
      headerName: 'Presença',
      sortable: false,
      width: 160,
    },
  ];

  const [value, setValue] = useState('Presença');

  const [isLoading, setIsLoading] = useState(true)

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleFaltas = (id, presenca) => {
    setCounter(counter + 1)

    const lenghtArray = alunoAtual.findIndex(index => {
      return index.id === id
    })

    const newStudent = [...alunoAtual]

    newStudent[lenghtArray].presenca = presenca

    setAlunoAtual(newStudent)
  }

  console.log(alunoAtual)

  return (
    <Box width="100vw" height="100vh">
      <TopBar PageTitle="Realizar" PageSpan=" chamada" />

      <Stack justifyContent="center" alignItems="center">

      <div className="containerCall">
        
            <Avatar alt='Foto do aluno' src={alunoAtual[counter].photo} sx={{ height: 150, width: 150 }} />
        
           <div className="infoAluno">
                <span> {alunoAtual[counter].name} </span>
                <p> {alunoAtual[counter].rm} </p>
            </div>

    </div>

      <FormControl>

        <FormLabel id="demo-controlled-radio-buttons-group">O aluno está presente?</FormLabel>

        <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
            >
            <FormControlLabel value="true" control={<Radio onClick={() => handleFaltas(alunoAtual[counter].id, true)}/>} label="Presente" />
            <FormControlLabel value="false" control={<Radio onClick={() => handleFaltas(alunoAtual[counter].id, false)}/>} label="Falta" />

        </RadioGroup>
      </FormControl>

      <Box sx={{ height: 400, width: '100%' }}>
        
      <DataGrid
        rows={student}
        columns={columns}
        /* components={{
            photo: Avatar
        }}
        componentsProps={{
             photo: { src: alunoAtual[counter].photo}
        }} */
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>

        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          Anterior
        </button>
       
        
      </Stack>
    </Box>
  );
}