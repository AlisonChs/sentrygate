import { useContext, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Slider from "@mui/material/Slider";
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SexModal from './SexModal';
import FormLabel from '@mui/material/FormLabel';
import Select from "react-select";
import Axios from "axios";

import "./register.css";
import GlobalDivider from "../../../components/UI/divider/GlobalDivider";

export function RegisterStudent() {  // Guarda os valores inseridos no INPUT
  const [values, setValues] = useState({
    nameAluno: "",
    sexAluno: "",
    dataNascAluno: "",
    rgAluno: "",
    emailAluno: "",
    passwordAluno: "",
    nameResponsavel: "",
    dataNascResponsavel: "",
    cpfResponsavel: "",
    rgResponsavel: "",
  });

  const handleRegister = (e) => {
    e.preventDefault()
    const nome = values.nameAluno;
    const dataNasc = values.dataNascAluno;
    const rgAluno = values.rgAluno;
    const emailAluno = values.emailAluno;
    const passwordAluno = values.passwordAluno;
    const nameResponsavel = values.nameResponsavel;
    const dataNascResponsavel = values.dataNascResponsavel;
    const cpfResponsavel = values.cpfResponsavel;
    const rgResponsavel = values.rgResponsavel;

    if (nome === '' ||
      dataNasc === '' ||
      rgAluno === '' ||
      emailAluno === '' ||
      passwordAluno === '' ||
      nameResponsavel === '' ||
      dataNascResponsavel === '' ||
      cpfResponsavel === '' ||
      rgResponsavel === '') {
      alert('Preencha todos os campos');
    } else {
      Axios.post("http://localhost:3001/aluno", {
        nome: nome,
        data_nasc: dataNasc,
        rg: rgAluno,
        email: emailAluno,
        senha: passwordAluno,
      }).then(Axios.post("http://localhost:3001/responsavel", {
        nome: nameResponsavel,
        data_nasc: dataNascResponsavel,
        cpf: cpfResponsavel,
        rg: rgResponsavel,
      })).then((response) => {

        let message = response.data.message

        if (message = 'Usuario cadastrado') {

          alert('Usuario cadastrado')

        } else {
          alert('Algo deu errado')
        }
      });
    }
  }


  const [isInputChanged, setIsInputChanged] = useState(true);

  const LoadingStyles = {
    color: "white",
    borderColor: "transparent",
    borderRadius: "0.5rem",
    transition: "all 0.5s ease-out",
    fontWeight: "bold",
    backgroundColor: "#5819BB",
    "&:hover": {
      borderColor: "transparent",
      padding: "0.5rem 1rem",
      backgroundColor: "#5819BB",
      cursor: "pointer",
      filter: "drop-shadow(5px 5px 0px #210D41)",
    },
  };

  console.log(values);

  const [currentStep, setCurrentStep] = useState(0);

  const [gender, setGender] = useState('')
  const [personalizedSex, setPersonalizedSex] = useState("Personalizado");


  const steps = [
    {
      id: "ALUNO",
      title: "Insira seus dados pessoais",
    },
    {
      id: "RESPONSAVEL",
      title: "Insira os dados do seu responsável",
    },
    {
      id: "CONTA",
      title: "Insira os dados da sua conta",
    },
  ];

  const CustomBackButton = {
    position: "absolute",
    top: "14px",
    left: "5px",
    transition: "all 0.5s ease-out",
    "&:hover": {
      transform: "rotateZ(360deg)",
    },
  };

  const customNextButton = {
    transition: "all 0.5s ease-out",
    borderRadius: "17%",
    width: "35px",
    textAlign: "center",
    height: "35px",
    backgroundColor: "#371E5F",
    borderColor: "#371E5F",
    "&:hover": {
      borderColor: "#371E5F",
      transform: "rotateZ(360deg)",
    },
  };

  const registerButton = {
    backgroundColor: "#210B43",
    color: "orange",
    fontWeight: "bold",
    borderRadius: "15px",
    "&:hover": {
      color: "orange",
      backgroundColor: "#371E5F",
    },
  };

  function onSubmit(e) {
    e.preventDefault();
  }

  function handleStep(to) {
    setIsInputChanged(false);

    if (to === "next") {
      setCurrentStep((prevState) => prevState + 1);
    }

    else if (to === "back") {
      setCurrentStep((prevState) => prevState - 1);
    }

    else {
      alert("Houve um erro ao avancar de página")
    }
  }

  const handleChangeValues = (value) => {
    setIsInputChanged(!values.any ? false : true);
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  function handleClose() {
    setGender(personalizedSex);
    setOpen(false);
  };

  const hr = {
    color: "white",
    borderColor: "white",
  };

  const customSlider = {
    width: "100%",
  };

  return (
    <div className="flex">
      {/* Animação de estrelas do fundo da tela */}
      <div className="stars">
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>

      {open ? <SexModal setPersonalizedSex={setPersonalizedSex} setOpen={setOpen} personalizedSex={personalizedSex} open={open} /> : null}

      <div className="auth">
        {currentStep > 0 && (
          <IconButton
            sx={CustomBackButton}
            onClick={() => handleStep("back")}
            fontaria-label="back to select page"
          >
            <ChevronLeftIcon sx={{ color: "white" }} fontSize="large" />
          </IconButton>
        )}

        <form name="registration_form" onSubmit={onSubmit}>
          <Slider
            sx={customSlider}
            value={currentStep}
            step={1}
            marks
            min={0}
            max={2}
            disabled
          />

          {steps[currentStep].id === "ALUNO" && (
            <>
              <h2>{steps[currentStep].title}</h2>

              <GlobalDivider text="Nome completo" />

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.nameAluno}
                placeholder="Digite seu nome completo"
                name="nameAluno"
                required
              />

              <GlobalDivider text="Gênero" />


              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="Feminino" control={<Radio />} label="Feminino" />
                  <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
                  <FormControlLabel value={personalizedSex} onChange={handleOpen} control={<Radio />} label={personalizedSex} />

                </RadioGroup>
              </FormControl>

              <GlobalDivider text="Nascimento" />

              <input
                type="date"
                onChange={handleChangeValues}
                value={values.dataNascAluno}
                placeholder="Data de nascimento"
                name="dataNascAluno"
                required
              />

              <GlobalDivider text="Registro Geral" />

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.rgAluno}
                placeholder="Digite o seu RG"
                name="rgAluno"
                required
              />
            </>
          )}
          {steps[currentStep].id === "RESPONSAVEL" && (
            <>
              <h2>
                {steps[currentStep].title}{" "}
              </h2>

              <GlobalDivider text="Nome completo" />

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.nameResponsavel}
                placeholder="Digite seu nome completo"
                name="nameResponsavel"
                required
              />

              <GlobalDivider text="Nascimento" />


              <input
                type="date"
                onChange={handleChangeValues}
                value={values.dataNascResponsavel}
                placeholder="Data de nascimento"
                name="dataNascResponsavel"
                required
              />

              <GlobalDivider text="CPF" />


              <input
                type="text"
                onChange={handleChangeValues}
                value={values.cpfResponsavel}
                placeholder="Digite o seu CPF. Ex: xxx.xxx.xxx.x"
                name="cpfResponsavel"
                required
              />

              <GlobalDivider text="Registro geral" />


              <input
                type="text"
                onChange={handleChangeValues}
                value={values.rgResponsavel}
                placeholder="Digite o seu RG"
                name="rgResponsavel"
                required
              />
            </>
          )}
          {steps[currentStep].id === "CONTA" && (
            <>
              <h2>
                {steps[currentStep].title}{" "}
              </h2>

              <GlobalDivider text="E-mail" />

              <input
                type="text"
                onChange={handleChangeValues}
                name="emailAluno"
                value={values.emailAluno}
                required
                placeholder="Digite o seu email"
              />

              <GlobalDivider text="Senha" />


              <input
                type="password"
                onChange={handleChangeValues}
                name="passwordAluno"
                value={values.passwordAluno}
                required
                placeholder="Digite sua senha"
              />
            </>
          )}

          {currentStep < 2 &&
            (!isInputChanged ? (
              <IconButton
                aria-label="next"
                sx={{
                  width: "30px",
                  height: "30px",
                  color: "orange",
                  backgroundColor: "#371E5F",
                  marginLeft: "49%",
                }}
              >
                <ChevronRightIcon onClick={() => handleStep("next")} />
              </IconButton>
            ) : null)}

          {currentStep >= 2 &&
            (!isInputChanged ? (
              <IconButton
                aria-label="next"
                sx={{ width: "30px", height: "30px", marginLeft: "49%" }}
              >
                <Button variant="contained" sx={registerButton} onClick={e => (handleRegister(e))}>
                  <SendIcon />
                </Button>
              </IconButton>
            ) : null)}
        </form>
      </div>
    </div>
  );
}
