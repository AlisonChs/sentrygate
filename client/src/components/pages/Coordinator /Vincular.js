import { Stack, Box, Typography, Modal, Fade, Button, styled, FormControl, InputLabel, MenuItem, ListSubheader, Divider, Grow } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField'; 
import Select from "react-select";


import {useState} from "react";

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

export function Vincular ({openVincularProf, setOpenVincularProf}) {

    const btnStyle = {
        color: "white",
        borderColor: "transparent",
        borderRadius: "0.5rem",
        marginTop: 4,
        transition: "all 0.5s ease-out",
        fontWeight: "bold",
        backgroundColor: "#5819BB",
        '&:hover' : {
          backgroundColor: "#5819BB",
          borderColor: 'transparent'
        }
      }

  const professores = [
    {
        id: 1,
        label: "alberto"
    },
    {
        id: 2,
        label: "eduardo"
    },
    {
        id: 3,
        label: "claudio"
    },
  ]

  const turmas = [
    {
        id: 1,
        label: "sociolocia 1"
    },
    {
        id: 2,
        label: "ds 2"
    },
    {
        id: 3,
        label: "sei la 5"
    },
  ]

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

  const handleCloseVincularProf = () => setOpenVincularProf(false);

    return (
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
              Vincular um ou mais professores com uma turma(s)
            </Typography>


            <Typography id="transition-modal-description" sx={{ mt: 2, color: "white"}}>
                Quais professores deseja vincular?
            </Typography>

              <Select closeMenuOnSelect={false} placeholder="Professor(es)" options={professores} isMulti color="black"/>

              <Divider sx={{height: 1, mt: 3}} />

              <Typography id="transition-modal-description" sx={{ mt: 2, color: "white" }}>
                Para quais turmas?
            </Typography>

              <Select closeMenuOnSelect={false} placeholder="Turma(s)" options={turmas} isMulti color="black"/>  

              <Button variant="outlined" sx={btnStyle}>Vincular estes professores.</Button>

          </Box>
        </Fade>
      </Modal>
    )
}