import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Select from "react-select";
import GlobalDivider from '../../../components/UI/divider/GlobalDivider';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#080114',
  borderRadius: '10px',
  border: '2px solid #120329',
  boxShadow: 24,
  p: 4,
};

export default function SexModal({ personalizedSex, setPersonalizedSex, open, setOpen }) {

  const handleClose = () => setOpen(false);

  function handleSex (e) {
    
    setPersonalizedSex(e.value);
    handleClose();
  
    e.preventDefault();
  }

  const genderOptions = [
    {
      label: "Agênero",
      value: "Agênero",
    },
    {
      label: "Andrógino",
      value: "Andrógino",
    },
    {
      label: "Assexual",
      value: "Assexual",
    },
    {
      label: "Bissexual",
      value: "Bissexual",
    },
    {
      label: "Cisgênero",
      value: "Cisgênero",
    },
    {
      label: "Crossdresser",
      value: "Crossdresser",
    },
    {
      label: "Gay/homossexual",
      value: "Gay/homossexual",
    },
    {
      label: "Heterossexual",
      value: "Heterossexual",
    },
    {
      label: "Lésbica",
      value: "Lésbica",
    },
    {
      label: "Não binário",
      value: "Não binário",
    },
    {
      label: "Pansexual",
      value: "Pansexual",
    },
    {
      label: "Transexual",
      value: "Transexual",
    },
  ];

  const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: 'white',
    cursor: 'pointer',
    padding: 15,
    border: 0,
    backgroundColor: "#200B41",
    "&:hover": {
      backgroundColor: "#5819BB"
    }
  }),
  defaultValue: (provided, state) => ({
    ...provided,
    color: 'white',
  }),
  menuList: (provided, state) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
 }),
 control: (base, state) => ({
  ...base,
  backgroundColor: '#200B41',
  width: 200,
  marginLeft: 50,
  color: 'white',
  border: state.isFocused ? 0 : 0,
  // This line disable the blue border
  boxShadow: state.isFocused ? 0 : 0,
  '&:hover': {
     border: state.isFocused ? 0 : 0
  }
}),
  
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <h1 style={{marginBottom: "1rem"}}>Por favor, especifique seu genero </h1>
            <Select
              styles={customStyles}
              options={genderOptions}
              name="sexAluno"
              onChange={(e) => handleSex(e)}
              placeholder={<div className="p1">Quem é você?</div>}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}


