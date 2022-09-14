import { useContext, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Slider from "@mui/material/Slider";
import Select from "react-select";

import "./register.css";

export function RegisterStudent() {  // Guarda os valores inseridos no INPUT
  const [values, setValues] = useState({
    nameAluno: "",
    dataNascAluno: "",
    cpfAluno: "",
    rgAluno: "",
    emailAluno: "",
    passwordAluno: "",
    nameResponsavel: "",
    dataNascResponsavel: "",
    cpfResponsavel: "",
    rgResponsavel: "",
  });

  const [sexo, setSexo] = useState('')

  const [isInputChanged, setIsInputChanged] = useState(true);

  const userOptions = [
    {
      label: "Masculino",
      value: "Masculino",
    },
    {
      label: "Feminino",
      value: "Feminino",
    },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: "white",
      cursor: "pointer",
      padding: 15,
      border: 0,
      backgroundColor: "#200B41",
      "&:hover": {
        backgroundColor: "#5819BB",
      },
    }),
    defaultValue: (provided, state) => ({
      ...provided,
      color: "white",
    }),
    menuList: (provided, state) => ({
      ...provided,
      paddingTop: 0,
      paddingBottom: 0,
    }),
    control: (base, state) => ({
      ...base,
      backgroundColor: "#200B41",
      width: 200,
      marginLeft: 50,
      color: "white",
      border: state.isFocused ? 0 : 0,
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? 0 : 0,
      },
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

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

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.nameAluno}
                placeholder="Digite seu nome completo"
                name="nameAluno"
                required
              />

              <input
                type="date"
                onChange={handleChangeValues}
                value={values.dataNascAluno}
                placeholder="Data de nascimento"
                name="dataNascAluno"
                required
              />

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.cpfAluno}
                placeholder="Digite o seu CPF. Ex: xxx.xxx.xxx.x"
                name="cpfAluno"
                required
              />

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

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.nameResponsavel}
                placeholder="Digite seu nome completo"
                name="nameResponsavel"
                required
              />

              <input
                type="date"
                onChange={handleChangeValues}
                value={values.dataNascResponsavel}
                placeholder="Data de nascimento"
                name="dataNascResponsavel"
                required
              />

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.cpfResponsavel}
                placeholder="Digite o seu CPF. Ex: xxx.xxx.xxx.x"
                name="cpfResponsavel"
                required
              />

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

              <input
                type="text"
                onChange={handleChangeValues}
                name="emailAluno"
                value={values.emailAluno}
                required
                placeholder="Digite o seu email"
              />

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
                <Button variant="contained" sx={registerButton}>
                  <SendIcon />
                </Button>
              </IconButton>
            ) : null)}
        </form>
      </div>
    </div>
  );
}
