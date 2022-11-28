import "./main.css";
import Lottie from "react-lottie";

import {useState} from "react";

import computer from "../../_assets/js/computer.json";

import { useNavigate } from "react-router";
import { Stack, Box, Typography, Modal, Fade, Button, styled, FormControl, InputLabel, Select, MenuItem, ListSubheader, Divider, Grow } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField'; 
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {pt} from 'date-fns/locale'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import {format} from 'date-fns'
import { useEffect } from "react";

const dateFormat = 'hh:mm'

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

  const [customTimePickerEntrada, setCustomTimePickerEntrada] = useState(false)
  const [customTimePickerSaida, setCustomTimePickerSaida] = useState(false)

  const [horarioEntrada, setHorarioEntrada] = useState(null)
  const [horarioSaida, setHorarioSaida] = useState(null)

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

  const handleHorarioEntrada = (newValue) => {

    const setValues = () => {
      setValueTimeEntrada(null)
      setHorarioEntrada(newValue.target.value)
    }

      newValue.target.value === 0 ? (
        openTimePickerEntrada()
      ) : (setValues())

   
  }

  const handleHorarioSaida = (newValue) => {

    const setValues = () => {
      setValueTimeSaida(null)
      setHorarioSaida(newValue.target.value)
    }

    newValue.target.value === 0 ? (
      openTimePickerSaida()
    ) : (setValues())
 
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

  const openTimePickerEntrada = () => {setCustomTimePickerEntrada(true)}
  const openTimePickerSaida = () => {setCustomTimePickerSaida(true)}

  const [formattedTime, setFormattedTime] = useState(null)

  const [valueTimeEntrada, setValueTimeEntrada] = useState(null)
  const [valueTimeSaida, setValueTimeSaida] = useState(null)

  const handleCustomTimeEntrada = (newValue) => {
    setValueTimeEntrada(newValue)

    setFormattedTime(format(newValue, dateFormat))

    setHorarioEntrada(formattedTime)
  }

  const handleCustomTimeSaida = (newValue) => {
    
    setValueTimeSaida(newValue)

    setFormattedTime(format(newValue, dateFormat))

    setHorarioSaida(formattedTime)
  }

  const closeTimePickerEntrada = () => {setCustomTimePickerEntrada(false)}

  const closeTimePickerSaida = () => {setCustomTimePickerSaida(false)}

  const selectStyles = {
    color: `white !important`, 
    '&::after': {
      borderColor: 'blueviolet',
      color: 'white'
    },
    
    '&::before': {
      borderColor: 'none',
      color: 'white'
    },
    borderColor:'none !important'
  }

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
              <InputLabel sx={selectStyles} htmlFor="grouped-select">Entrada</InputLabel>
              <Select sx={selectStyles} variant="filled" onChange={handleHorarioEntrada} id="grouped-select" label="Grouping">
                <ListSubheader>Matutino</ListSubheader>
                <MenuItem value='06:00'>06h:00m</MenuItem>
                <MenuItem value='07:00'>07h:00m</MenuItem>
                <ListSubheader>Vespertino</ListSubheader>
                <MenuItem value='13:00'>13h:00m</MenuItem>
                <MenuItem value='14:00'>14h:00m</MenuItem>
                <ListSubheader></ListSubheader>
                <MenuItem value={0}>
                  {valueTimeEntrada === null ? <b>Customizar</b> : formattedTime}
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel sx={selectStyles} htmlFor="grouped-select">Saída</InputLabel>
              <Select sx={selectStyles} variant="filled" onChange={handleHorarioSaida} defaultValue="" id="grouped-select" label="Grouping">
                <ListSubheader>Matutino</ListSubheader>
                <MenuItem value='11:00'>11h:00m</MenuItem>
                <MenuItem value='12:00'>12h:00m</MenuItem>
                <ListSubheader>Vespertino</ListSubheader>
                <MenuItem value='18:00'>18h:00m</MenuItem>
                <MenuItem value='17:00'>17h:00m</MenuItem>
                <ListSubheader></ListSubheader>
                <MenuItem value={0}>
                  {valueTimeSaida === null ? <b>Customizar</b> : formattedTime}
                </MenuItem>
              </Select>
            </FormControl>
{/**/}

          <LocalizationProvider locale={pt} dateAdapter={AdapterDateFns}>
            <Fade in={customTimePickerEntrada}> 
              <MobileTimePicker
                onAccept={closeTimePickerEntrada} 
                dateFormat="h:mm"
                onChange={handleCustomTimeEntrada}
                value={valueTimeEntrada}
                label="Horário de entrada" open={customTimePickerEntrada}
                renderInput={(params) => <Backdrop in={customTimePickerEntrada} {...params} />}
              />
            </Fade>
          </LocalizationProvider>
             

              <LocalizationProvider locale={pt} dateAdapter={AdapterDateFns}>
                <Fade in={customTimePickerSaida}>
                <MobileTimePicker 
                  onChange={handleCustomTimeSaida}
                  label="Horário de saída" 
                  value={valueTimeSaida}
                  onAccept={closeTimePickerSaida}
                  dateFormat="h:mm"
                  renderInput={(params) => <Backdrop in={customTimePickerSaida} {...params} />}
                />
          </Fade>
      </LocalizationProvider>

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
