import "./main.css";
import Lottie from "react-lottie";

import {useState} from "react";

import computer from "../../_assets/js/computer.json";

import { useNavigate } from "react-router";
import { Stack, Box, Typography, Modal, Fade, Button } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';

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
    width: 200,
    height: 200,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    fontWeight: 'bolder'
  }

  const boxTitleStyle = {
    color: 'white',
    backgroundColor: 'blueviolet',
    width: 660,
    height: 200,
    borderRadius: 5,
    fontSize: '0.5rem',
    padding: '1.5rem 1.5rem 1.5rem 1.5rem'
  }

  const modalStyle = {
    position: 'absolute',    
    borderRadius: 5,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'blueviolet',
    boxShadow: 24,
    p: 4,
  };

  const btnStyle = {
    color: "white",
    borderColor: "transparent",
    borderRadius: "0.5rem",
    marginTop: "15px",
    transition: "all 0.5s ease-out",
    fontWeight: "bold",
    backgroundColor: "#5819BB",
    '&:hover' : {
      backgroundColor: "#5819BB",
      borderColor: 'transparent'
    }
  }

  const inputStyle = {
    color: 'white'
  }

  const [openTurmas, setOpenTurmas] = useState(false);
  const handleOpenTurmas = () => setOpenTurmas(true);
  const handleCloseTurmas = () => setOpenTurmas(false);

  const [openMaterias, setOpenMaterias] = useState(false);
  const handleOpenMaterias = () => setOpenMaterias(true);
  const handleCloseMaterias = () => setOpenMaterias(false);

  const [openVincularProf, setOpenVincularProf] = useState(false);
  const handleOpenVincularProf = () => setOpenVincularProf(true);
  const handleCloseVincularProf = () => setOpenVincularProf(false);
  

  return (
    <>
      <div className="main">

      {// Modal - criar turmas
      }

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openTurmas}
        onClose={handleCloseTurmas}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openTurmas}>
          <Box sx={modalStyle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Criar uma turma
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2, mb: 3 }}>
              Insira os dados da turma que deseja criar e deixe o resto conosco!
            </Typography>

            <TextField sx={inputStyle} id="standard-basic" label="Nome da turma" variant="standard" />

            <Button variant="outlined" sx={btnStyle}>Adicionar turma</Button>

          </Box>
        </Fade>
      </Modal>

       {// Modal - criar materias
      }

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openMaterias}
        onClose={handleCloseMaterias}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openMaterias}>
          <Box sx={modalStyle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              matérias
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>

       {// Modal - Vincular professor com turma
      }

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openVincularProf}
        onClose={handleCloseVincularProf}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openVincularProf}>
          <Box sx={modalStyle}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              vincular prof
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>

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
              <Typography component="h1">Bem vindo! {localStorage.getItem('name') === '' ? (localStorage.getItem('name')) : ('Professor')}</Typography>
              <Typography component="h1">
                <span><b>Sentry Gate</b></span>
              </Typography>
            </Box>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              sx={{marginTop: 10}}
            >
              <Box onClick={handleOpenTurmas} sx={boxStyle}>Criar uma turma</Box>
              <Box onClick={handleOpenMaterias} sx={boxStyle}>Criar matérias</Box>
              <Box onClick={handleOpenVincularProf} sx={boxStyle}>Vincular professor com uma turma</Box>

              <Box onClick={handleOpenTurmas} sx={boxStyle}>Box 1</Box>
              <Box onClick={handleOpenTurmas} sx={boxStyle}>Box 1</Box>
              <Box onClick={handleOpenTurmas} sx={boxStyle}>Box 1</Box>

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
    </>
  );
}
