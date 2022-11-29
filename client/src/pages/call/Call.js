import { useEffect, useState, memo } from "react";

import search from "../../_assets/js/search.json";

import Lottie from "lottie-react";

import { Avatar, Backdrop, Box, Checkbox, CircularProgress, FormControl, FormControlLabel, FormLabel, Grow, Radio, RadioGroup, Skeleton, Stack, Typography, Slide, Snackbar, Divider, Button} from "@mui/material";
import TopBar from "../../components/UI/navbar/TopBar/TopBar";

import './call.css'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export function Call() {

  const listClass = [
    {
      id: Math.random(),
      nameClass: "3ºB Desenvolvimento de sistemas - Português",
      alunos: [
        {
          id: 0,
          nome: "Victor Hugo Carvalho Moreira dos Santos",
          rm: Math.random(),
          photo: "https://github.com/Victor-HM.png",
          presenca: true,
          atividade: [],
        },
        {
          id: 1,
          nome: "Thiago Henrique da Silva Santos",
          rm: Math.random(),
          photo: "https://github.com/AlisonChs.png",
          presenca: true,
          atividade: [],
        },
        {
          id: 2,
          nome: "Nicolle Christina Almeida de Souza",
          rm: Math.random(),
          photo: "https://github.com/AlisonChs.png",
          presenca: true,
          atividade: [],
        },
        {
          id: 3,
          nome: "Bruno Calvo Barbosa",
          rm: Math.random(),
          photo: "https://github.com/AlisonChs.png",
          presenca: true,
          atividade: [],
        },
      ],
    },

    {
      id: Math.random(),
      nameClass: "3ºA Desenvolvimento de sistemas - Português",
      alunos: [
        {
          id: 0,
          nome: "Simone",
          rm: Math.random(),
          photo: "https://github.com/AlisonChs.png",
          presenca: true,
          atividade: [],
        },
        {
          id: 1,
          nome: "Yan Mendonça",
          rm: Math.random(),
          photo: "https://github.com/AlisonChs.png",
          presenca: true,
          atividade: [],
        },
        {
          id: 2,
          nome: "Bianca",
          rm: Math.random(),
          photo: "https://github.com/AlisonChs.png",
          presenca: true,
          atividade: [],
        },
        {
          id: 3,
          nome: "Bruno Calvo Barbosa",
          rm: Math.random(),
          photo: "https://github.com/AlisonChs.png",
          presenca: true,
          atividade: [],
        },
      ],
    },

    {
      id: Math.random(),
      nameClass: "3ºA Administração - Português",
      alunos: [
        {
          id: 0,
          nome: "Victor Hugo Carvalho Moreira dos Santos",
          rm: Math.random(),
          photo: "https://github.com/Victor-HM.png",
          presenca: true,
          atividade: [],
        },
        {
          id: 1,
          nome: "Thiago Henrique da Silva Santos",
          rm: Math.random(),
          photo: "https://github.com/AlisonChs.png",
          presenca: true,
          atividade: [],
        },
        {
          id: 2,
          nome: "Felipe Dourado",
          rm: Math.random(),
          photo: "https://github.com/FS-Dourado.png",
          presenca: true,
          atividade: [],
        },
        {
          id: 3,
          nome: "Bruno Calvo Barbosa",
          rm: Math.random(),
          photo: "https://github.com/BrunoDeSP.png",
          presenca: true,
          atividade: [],
        },
      ],
    },
  ];

  const sendBTN = {
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


  const [selectClass, setSelectClass] = useState(null)

  const [methodOfCall, setMethodOfCall] = useState(`ambos`)

  function getCurrentDate(separator='/'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${date}${separator}${month}${separator}${year}`
    }

  const [hasNewStudent, setHasNewStudent] = useState(true)

  const [newStudents, setNewStudents] = useState(selectClass)

  const handleNewStudent = () => { 
    
      setHasNewStudent(false)
      setTimeout(() => {
        setHasNewStudent(true)
        setProp(null)
      }, 600)

  }

  function backdrop () {
    if (prop === null) {
      return (
      <Backdrop open={true}>
        <CircularProgress color="secondary" />
      </Backdrop>
      )
    }
    else if (prop) {
      return (
        <Backdrop open={true}>
          <CheckIcon sx={{color: `green`, fontSize: 80}} />
      </Backdrop>
      )
    } else {
      return (
        <Backdrop open={true}>
          <ClearIcon sx={{color: `red`, fontSize: 80}} />
      </Backdrop>
      )
    }
  }

  const [nameClass, setNameClass] = useState(null)

  useEffect(() => {
    document.onkeydown = (e) => {
      e = e || window.event;

      if (e.key === `ArrowUp`) {
        handleNewStudent()
        handleFaltas(selectClass[counter].id, true)
      } else if (e.key === `ArrowDown`) {
        handleNewStudent()
        handleFaltas(selectClass[counter].id, false)
      } else if (e.key === `ArrowLeft`) {
        handleNewStudent()
        counter !== 0 ? setCounter(counter - 1) : setCounter(selectClass.length - 1)
      } else if (e.key === `ArrowRight`) {
        handleNewStudent()
        counter + 1 < selectClass.length ? setCounter(counter + 1) : setCounter(0)
      } 
    }
  });
  
  const [counter, setCounter] = useState(0);

  const [value, setValue] = useState('Presença');

  const [isLoading, setIsLoading] = useState(true)

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log(newStudents)

  const handleFaltas = (id, presenca) => {
    counter + 1 < selectClass.length ? setCounter(counter + 1) : setCounter(0)

    const lenghtArray = selectClass.findIndex(index => {
      return index.id === id
    })

    const newStudent = [...selectClass]

    newStudent[lenghtArray].presenca = presenca

    setNewStudents(newStudent)

    setProp(newStudents[lenghtArray].presenca)

  }

  const getPresencaAlunoAtual = (id) => {
    return selectClass[id].presenca
  }

  const [selecionouTurma, setSelecionouTurma] = useState(false)

  const [prop, setProp] = useState(null)

  return (
    <Box width="100vw" height="100vh">
      <TopBar PageTitle="Realizar" PageSpan=" chamada" />

      <div className="stars">
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>

      {selecionouTurma ? (
        <Box>
        <Stack justifyContent="center" alignItems="center" mt={10}>

        {!hasNewStudent && (backdrop())}

    <Slide direction="up" in={hasNewStudent}>
  
      <Avatar alt='Foto do aluno' src={selectClass[counter].photo} sx={{ height: 150, width: 150 }} />

      </Slide >

      <Slide direction="up" in={hasNewStudent}>

      <Box mt={3} sx={{backgroundColor: `blueviolet`, fontSize: `1.5rem`, width: 300, padding: 3, borderRadius: 2, textAlign: `center`}} className="infoAluno">
            <b><span> {selectClass[counter].nome} </span></b>
            <Typography sx={{color: `white`, mt: 2}}><b> RM: </b> {selectClass[counter].rm} </Typography>
        </Box>

        
    </Slide >

<Slide direction="up" in={hasNewStudent}>

<FormControl>

<Box mt={3} sx={{backgroundColor: `blueviolet`, fontSize: `1.5rem`, padding: 3, borderRadius: 2, textAlign: `center`}} className="infoAluno">

  <FormLabel sx={{color: `white !important`, fontWeight: `bolder`, fontSize: `2rem`}} id="demo-controlled-radio-buttons-group">O aluno está presente?</FormLabel>
  
  </Box>

  <Button variant="contained" sx={sendBTN}>
    Salvar chamada
  </Button>

</FormControl>

</Slide >
       
</Stack>

<Stack sx={{width: 350, position:`absolute`, top: 65, right: 5, height: `100%`, display: `flex`, alignItems: `flex-end`}}>
  
  <Box sx={{
          backgroundColor: `orange`, 
          width: `100%`,
          color: `white`,
          fontWeight: `bolder`,
          alignItems: `center`,
          justifyContent: `center`,
          borderRadius: 2,
          display: `flex`,
          flexDirection: `column`,
          height: 150,
          boxShadow: `0px 0px 20px #120329`,
          transition: `all 0.5s`
        }}
        mt={1}>
          <Typography sx={{fontWeight: `bold`, fontSize: `medium`}}>Turma atual: <Typography sx={{fontSize: `small`}}>{nameClass}</Typography> </Typography>
          <br /><Divider /><br />
          <Typography sx={{fontWeight: `bold`, fontSize: `small`}}>Realizando chamada do dia: {getCurrentDate()}</Typography>
      </Box>
  { 
    selectClass.map((aluno) => 
      <Box onClick={() => {
        handleNewStudent()
        setTimeout(() => setCounter(aluno.id), 500)
        }} 
        sx={{
          backgroundColor: aluno.id === counter ? `primary` : `blueviolet`, 
          width: `100%`,
          color: `white`,
          fontWeight: `bolder`,
          alignItems: `center`,
          justifyContent: `space-between`,
          borderRadius: 2,
          display: `flex`,
          height: 50,
          boxShadow: `0px 0px 20px #120329`,
          transition: `all 0.5s`
        }}
        mt={1}
      >

      <Avatar alt='Foto do aluno' src={aluno.photo} ml={1} sx={{ height: 40, width: 40 }} />

      <Typography ml={1}>{aluno.nome}</Typography>

      <Checkbox 
        className="thsvg"
        onClick={() => handleFaltas(aluno.id, !getPresencaAlunoAtual(aluno.id))}
        checked={getPresencaAlunoAtual(aluno.id)} 
      />

      </Box>
    ) 
  }
</Stack>
</Box>
      ) : (
        <Box sx={{width: `100vw`, height: `100vh`, flexDirection: `column`, display: `flex`, alignItems: `center`, justifyContent: `center`}}>
          
            <h1>Selecione uma turma!</h1>

            <Lottie animationData={search} style={{ width: "20%" }} />

          <div className="selectClass">

          <div className="List">

            {listClass.map((index) => 
              <Box sx={{
                backgroundColor: `blueviolet`, 
                width: `100%`,
                color: `white`,
                fontWeight: `bolder`,
                alignItems: `center`,
                justifyContent: `center`,
                mt: 2,
                borderRadius: 2,
                display: `flex`,
                height: 50,
                boxShadow: `0px 0px 20px #120329`,
                transition: `all 0.5s`
              }}
              onClick={() => {
                handleNewStudent()
                setNameClass(index.nameClass)
                setSelectClass(index.alunos)
                setSelecionouTurma(true)}}
              >{index.nameClass}</Box>
            )}

          </div>

        </div>
        
        </Box> 
        
        )

}
    </Box>
  );
}
