import { Stack, Box, Typography, Modal, Fade, Button, styled, FormControl, InputLabel, Select, MenuItem, ListSubheader, Divider, Grow } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField'; 

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
              Vincular um professor com uma turma
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              
            </Typography>
          </Box>
        </Fade>
      </Modal>
    )
}