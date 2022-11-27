import "./main.css";
import Lottie from "react-lottie";

import {useState} from "react";

import computer from "../../_assets/js/computer.json";

import { useNavigate } from "react-router";
import { Stack, Box, Typography, Modal, Fade, Button, styled, FormControl, InputLabel, Select, MenuItem, ListSubheader, Divider, Grow } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField'; 
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

const StyledTextField = styled(TextField) ({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& MuiInput-root': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
});


export function Main() {

  const [customTimePickerMT, setCustomTimePickerMT] = useState(false)
  const [customTimePickerVP, setCustomTimePickerVP] = useState(false)

  const [horarioEntrada, setHorarioEntrada] = useState(null)

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

  const handleHorarioTurma = (event) => {

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
            <Typography id="transition-modal-title" variant="h4" component="h2">
              Criar uma turma
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2, mb: 3, color:  "white"}}>
              Insira os dados da turma que deseja criar e deixe o resto conosco!
            </Typography>
 
            <StyledTextField sx={{input: {color: 'white' }}} helperText="Insira o nome da turma" id="standard-basic" label="Nome da turma" variant="standard" />

          <Divider sx={{mt: 2, mb: 2}} />

          <Typography id="transition-modal-description" sx={{ mt: 2, mb: 1, color:  "white"}}>
              Insira o horário de entrada e saída da turma:
            </Typography>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-select">Entrada</InputLabel>
              <Select onChange={handleHorarioTurma} defaultValue=""  id="grouped-select" label="Grouping">
                <ListSubheader>Matutino</ListSubheader>
                <MenuItem value={1}>06h:00</MenuItem>
                <MenuItem value={2}>07:00</MenuItem>
                <ListSubheader>Vespertino</ListSubheader>
                <MenuItem value={3}>13:00</MenuItem>
                <MenuItem value={4}>14:00</MenuItem>
                <ListSubheader></ListSubheader>
                <MenuItem onClick={() => setCustomTimePickerMT(true)}>
                Outro?
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="grouped-select">Saída</InputLabel>
              <Select onChange={handleHorarioTurma} defaultValue="" id="grouped-select" label="Grouping">
                <ListSubheader>Matutino</ListSubheader>
                <MenuItem value={1}>11h:00</MenuItem>
                <MenuItem value={2}>12h:00</MenuItem>
                <ListSubheader>Vespertino</ListSubheader>
                <MenuItem value={3}>18:00</MenuItem>
                <MenuItem value={4}>17:00</MenuItem>
                <ListSubheader></ListSubheader>
                <MenuItem onClick={() => setCustomTimePickerVP(true)}>
                Outro?
                </MenuItem>
              </Select>
            </FormControl>
{/**/}

              { customTimePickerMT ? (
              <LocalizationProvider dateAdapter={AdapterDayjs}  sx={{position: `absolute`, left: 15}}>
                <Fade in={true}>
                <MobileTimePicker value={horarioEntrada}
                onChange={(newValue) => {
                  setHorarioEntrada(newValue);
                }} label="Horário de entrada" open={true}
          onChange={(newValue) => {
            setHorarioEntrada(newValue);
          }}
          renderInput={(params) => <Backdrop in={true} {...params} />}/>
          </Fade>
      </LocalizationProvider>
      ) : null }

      { customTimePickerVP ? (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Fade in={true}>
                <MobileTimePicker 
                  value={horarioEntrada}
                  label="Horário de saída" 
                  open={true} 
                  onChange={(newValue) => {
                    setHorarioEntrada(newValue);
                  }}
                  renderInput={(params) => <Backdrop in={true} {...params} />}
                />
          </Fade>
      </LocalizationProvider>
      ) : null }

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
