import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Avatar, MenuItem, Modal, Select, Stack } from '@mui/material';
import {useLocation} from 'react-router-dom';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';

export function Folder () {

  const cursos = [
    {
      id: 1,
      curso: "Análise e desenvolvimento de sistemas",
    },
    {
      id: 2,
      curso: "Ensino médio",
    },
  ]

  const bimestres = [
    {
      id: 1,
      curso: "Análise e desenvolvimento de sistemas",
      bimestre: "1º Bimestre"
    },
    {
      id: 1,
      curso: "Análise e desenvolvimento de sistemas",
      bimestre: "2º Bimestre"
    },
    {
      id: 1,
      curso: "Análise e desenvolvimento de sistemas",
      bimestre: "3º Bimestre"
    },
    {
      id: 2,
      curso: "Ensino médio",
      bimestre: "1º Bimestre"
    },
    {
      id: 2,
      curso: "Ensino médio",
      bimestre: "2º Bimestre"
    },
    {
      id: 2,
      curso: "Ensino médio",
      bimestre: "3º Bimestre"
    },
  ]

    const location = useLocation();

    const [pathname, setPathname] = React.useState(null);

    const anoAtual = () => {
      const date = new Date();
      return date.getFullYear()
    }

    React.useEffect(() => {
        setPathname(location.pathname)
    }, [location.pathname])

    const [valorSelecionado, setValorSelecionado] = React.useState(null)

    const [values, setValues] = React.useState({
      anoSelecionado: anoAtual(),
      cursoSelecionado: null,
      bimestreSelecionado: null
    })

    const handleChange = (value) => {
      setValorSelecionado(value.target.value)
      setOpenSnack(true)
      setValues((prevValue) => ({
        ...prevValue,
        [value.target.name]: value.target.value,
    }));
    }

    function getValorSelecionado () {
      return 'Selecionado: ' + valorSelecionado;
    }

    function getPathname () { 
        if (pathname === '/report') {
            return 'Boletim Escolar'
        } else if (pathname === '/insert/activity') {
            return 'Registro de avaliação';
        } else if (pathname === '/register/student') {
            return 'Registro de estudante';
        } else {
            return pathname
        }
    }

    const [openModal, setOpenModal] = React.useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const styleModal = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };

    const [openSnack, setOpenSnack] = React.useState(false);

    const handleCloseSnack = () => {
      setOpenSnack(false);
    };

  const action = (
    <React.Fragment >
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnack}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


    return (
        <Stack sx={{flexGrow: 1}} role="presentation" >
      <Breadcrumbs sx={{color: "white"}} aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          onClick={handleOpenModal}
        >
        <Avatar sx={{ width: 20, height: 20, mr: 1, mb: 0.5}} />
          Alison Christian
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
        >
          Etec de CIDADE TIRADENTES
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
        >
          {getPathname()}
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
        >

        <Select
          value={values.anoSelecionado}
          onChange={handleChange}
          name="anoSelecionado"
          disableUnderline
          sx={{color: "white", boxShadow: 'none', '.MuiSelect-icon': {color: 'white'}, '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
        >
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2023}>2023</MenuItem>
          <MenuItem value={2024}>2024</MenuItem>
        </Select>
      

        </Link>

        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
        >
        
        <Select
          value={values.cursoSelecionado}
          onChange={handleChange}
          name="cursoSelecionado"
          disableUnderline
          sx={{color: "white", boxShadow: 'none', '.MuiSelect-icon': {color: 'white'}, '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
        >
          
          {cursos.map((index) => {
              return <MenuItem value={index.curso}>{index.curso}</MenuItem>
          })}
          
        </Select>

        </Link>

        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
        >
        
        <Select
          value={values.bimestreSelecionado}
          onChange={handleChange}
          name="bimestreSelecionado"
          disableUnderline
          sx={{color: "white", boxShadow: 'none', '.MuiSelect-icon': {color: 'white'}, '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
        >
          
          {bimestres
          .filter(index => index.curso === values.cursoSelecionado)
          .map((index) => {
              return <MenuItem key={index.id} label={index.curso} value={index.bimestre}>{index.bimestre}</MenuItem>
          })}
          
        </Select>

        </Link>

      </Breadcrumbs>

      {/* Hidden components */}

      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
        message={getValorSelecionado()}
        action={action}
      />

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={styleModal}>
          <p>Alison Christian</p>
        </Box>
      </Modal>

    </Stack>
    )
}  