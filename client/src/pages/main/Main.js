import "./main.css";
import Lottie from "react-lottie";

import {useState} from "react";

import computer from "../../_assets/js/computer.json";

import { useNavigate } from "react-router";
import { Stack, Box, Typography } from "@mui/material";

import { Turmas } from "../../components/pages/Coordinator /Turmas";

import { Materias } from "../../components/pages/Coordinator /Materias";
import { Vincular } from "../../components/pages/Coordinator /Vincular";
import { Professor } from "../../components/pages/Coordinator /Professor";




export function Main() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: computer,
  };
 
  const navigate = useNavigate()

  function goBoletim() {
    navigate('/boletim')
  }

  const boxStyle = {
    color: 'white',
    backgroundColor: 'blueviolet',
    width: 150,
    height: 150,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    transition : 'all 0.5s',
    '&:hover': {
      boxShadow: '10px 10px 0px 2px rgba(138,43,226,0.86)'
    },
    fontWeight: 'bolder'
  }

  const boxTitleStyle = {
    color: 'white',
    backgroundColor: 'blueviolet',
    width: 600,
    height: 100,
    borderRadius: 5,
    fontSize: '0.1rem',
    padding: '1rem 1rem 1rem 1rem',
  }

  const [openTurmas, setOpenTurmas] = useState(false);
  const handleOpenTurmas = () => setOpenTurmas(true);

  const [openMaterias, setOpenMaterias] = useState(false);
  const handleOpenMaterias = () => setOpenMaterias(true);

  const [openVincularProf, setOpenVincularProf] = useState(false);
  const handleOpenVincularProf = () => setOpenVincularProf(true);

  const [openCriarProf, setOpenCriarProf] = useState(false);
  const handleOpenCriarProf = () => setOpenCriarProf(true);

  return (
    <Stack>
      <div className="main">

      {// Modal - criar turmas
      }

     <Turmas openTurmas={openTurmas} setOpenTurmas={setOpenTurmas} />

       {// Modal - criar materias
      }

    <Materias openMaterias={openMaterias} setOpenMaterias={setOpenMaterias} />

       {// Modal - Vincular professor com turma
      }

      <Vincular setOpenVincularProf={setOpenVincularProf} openVincularProf={openVincularProf} />

      {// Modal - Criar professores
      }

      <Professor setOpenCriarProf={setOpenCriarProf} openCriarProf={openCriarProf} />

        {/* Animação de estrelas do fundo da tela */}
      <div className="stars">
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>

        <div className="mainContent">
          <div className="content-left">
            <Box sx={boxTitleStyle} className="title">
              <Typography component="h1"><b>Bem vindo! {localStorage.getItem('name') === '' ? (localStorage.getItem('name')) : <span>Professor</span>}</b></Typography>
            </Box>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              sx={{marginTop: 10}}
            >
              <Box onClick={handleOpenTurmas} sx={boxStyle}>Inserir uma turma</Box>
              <Box onClick={handleOpenMaterias} sx={boxStyle}>Inserir uma matéria</Box>
              <Box onClick={handleOpenCriarProf} sx={boxStyle}>Inserir um professor</Box>
              <Box onClick={handleOpenVincularProf} sx={boxStyle}>Vincular professor com uma turma</Box>


            </Stack>
            <div className="content-right">
            <div>
              <Lottie
                options={defaultOptions}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </Stack>
  );
}
