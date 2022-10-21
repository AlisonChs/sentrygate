
import React from 'react';
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
import CircularProgress from '@mui/material/CircularProgress';
import Fab from '@mui/material/Fab';
import Axios from "axios";
import ApiCep from "../../../services/ApiCep";

import "./register.css";
import GlobalDivider from "../../../components/UI/divider/GlobalDivider";

export function RegisterStudent() {  // Guarda os valores inseridos no INPUT
  const [values, setValues] = useState({
    // Passo 1: ALUNO - Info. Pessoais
    nomeAluno: "",
    sobrenomeAluno: "",
    generoAluno: "",
    dataNascAluno: "",
    rgAluno: "",
    cpfAluno: "",
    // Passo 2: ALUNO - Endereço
    cepAluno: "",
    cidadeAluno: "",
    bairroAluno: "",
    ruaAluno: "",
    complementoCasaAluno: "",
    // Passo 3: RESPONSÁVEL ALUNO 
    nomeResponsavel: "",
    sobrenomeResponsavel: "",
    dataNascResponsavel: "",
    rgResponsavel: "",
    cpfResponsavel: "",
    // Passo 4 - CONTATO
    telResponsavel: "",
    telAluno: "",
    telOpcional: "",
    // Passo 5: DADOS DE LOGIN 
    emailAluno: "",
    passwordAluno: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [blur, setBlur] = React.useState('')
  const timer = React.useRef();

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);


  function checkCEP() {

    if (!loading) {
      setSuccess(false);
      setLoading(true);
      setBlur('blur');
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setBlur('blur');

        setLoading(false);
        ApiCep.SearchCep(values.cepAluno).then((res) => {
          let rua = res.data.logradouro;
          let bairro = res.data.bairro;
          let cidade = res.data.localidade;
          let estado = res.data.uf;
          // Mudando o estado
          setValues({
            ruaAluno: rua
            , bairroAluno: bairro
            , cidadeAluno: cidade
            , estadoAluno: estado
          })
        })
      }, 4000);
    }


  }

  const handleRegister = (e) => {
    e.preventDefault()

    // Passo 1: ALUNO - Info. Pessoais
    const nomeAluno = values.nomeAluno;
    const sobrenomeAluno = values.sobrenomeAluno;
    const dataNascAluno = values.dataNascAluno;
    const generoAluno = values.generoAluno;
    const rgAluno = values.rgAluno;
    const cpfAluno = values.cpfAluno;
    // Passo 2: ALUNO - Endereço
    const cepAluno = values.cepAluno;
    const cidadeAluno = values.cidadeAluno;
    const bairroAluno = values.bairroAluno;
    const ruaAluno = values.ruaAluno;
    const complementoCasaAluno = values.complementoCasaAluno;
    // Passo 3: RESPONSÁVEL ALUNO 
    const nomeResponsavel = values.nomeResponsavel;
    const sobrenomeResponsavel = values.sobrenomeResponsavel;
    const dataNascResponsavel = values.dataNascResponsavel;
    const cpfResponsavel = values.cpfResponsavel;
    const rgResponsavel = values.rgResponsavel;
    // Passo 4: CONTATO
    const telResponsavel = values.telResponsavel;
    const telAluno = values.telAluno;
    const telOpcional = values.telOpcional;
    // Passo 5: DADOS DE LOGIN 
    const emailAluno = values.emailAluno;
    const passwordAluno = values.passwordAluno;

    // Verificação básica apenas dos campos obrigatórios
    if (nomeAluno === '' ||
      sobrenomeAluno === '' ||
      dataNascAluno === '' ||
      generoAluno === '' ||
      rgAluno === '' ||
      cpfAluno === '' ||
      cepAluno === '' ||
      cidadeAluno === '' ||
      bairroAluno === '' ||
      ruaAluno === '' ||
      complementoCasaAluno === '' ||
      nomeResponsavel === '' ||
      sobrenomeResponsavel === '' ||
      dataNascResponsavel === '' ||
      cpfResponsavel === '' ||
      rgResponsavel === '' ||
      telResponsavel === '' ||
      telAluno === '' ||
      emailAluno === '' ||
      passwordAluno === '') {
      alert('Preencha todos os campos');
    } else {
      Axios.post("http://localhost:3001/aluno", {
        nome: nomeAluno,
        sobrenome: sobrenomeAluno,
        data_nasc: dataNascAluno,
        genero: generoAluno,
        rg: rgAluno,
        cpf: cpfAluno,
        cep: cepAluno,
        cidade: cidadeAluno,
        bairro: bairroAluno,
        rua: ruaAluno,
        complemento: complementoCasaAluno,
        tel: telAluno,
      }).then(Axios.post("http://localhost:3001/responsavel", {
        nome: nomeResponsavel,
        sobrenome: sobrenomeResponsavel,
        data_nasc: dataNascResponsavel,
        //tel_opcional: telOpcional ? telOpcional : 'Não inserido',
        cpf: cpfResponsavel,
        rg: rgResponsavel,
        tel: telResponsavel,
      })).then(Axios.post("http://localhost:3001/conta", {
        email: emailAluno,
        senha: passwordAluno,
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

  const steps = [
    {
      id: "ALUNO",
      title: "Insira seus dados pessoais",
    },
    {
      id: "ENDERECO",
      title: "Nos conte seu endereço"
    },
    {
      id: "RESPONSAVEL",
      title: "Insira os dados do seu responsável",
    },
    {
      id: "CONTATO",
      title: "Informe o contato para nós"
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

  /* SexModal (usar para deficiente)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  function handleClose() {
    setGender(personalizedSex);
    setOpen(false);
  }; */

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

      {/* open ? <SexModal setPersonalizedSex={setPersonalizedSex} setOpen={setOpen} personalizedSex={personalizedSex} open={open} /> : null */}

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
            max={4}
            disabled
          />

          {steps[currentStep].id === "ALUNO" && (
            <>
              <h2>{steps[currentStep].title}</h2>

              <GlobalDivider text="Nome completo" />

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.nomeAluno}
                placeholder="Digite seu nome"
                name="nomeAluno"
                required
              />

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.sobrenomeAluno}
                placeholder="Digite seu sobrenome completo"
                name="sobrenomeAluno"
                required
              />

              <GlobalDivider text="Documentos do aluno" />

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.cpfAluno}
                placeholder="Digite seu CPF"
                name="cpfAluno"
                required
              />

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.rgAluno}
                placeholder="Digite seu RG"
                name="rgAluno"
                required
              />

              <GlobalDivider text="Gênero" />


              <FormControl onChange={handleChangeValues}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel name='generoAluno' value="Feminino" control={<Radio />} label="Feminino" />
                  <FormControlLabel name='generoAluno' value="Masculino" control={<Radio />} label="Masculino" />
                  <FormControlLabel name='generoAluno' value="Não-binário" control={<Radio />} label="Não-binário" />
                  {/* <FormControlLabel name='generoAluno' value={personalizedSex} onChange={handleOpen} control={<Radio />} label={personalizedSex} /> */}

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

            </>
          )}
          {steps[currentStep].id === "ENDERECO" && (
            <>
              <h2>{steps[currentStep].title}</h2>

              <GlobalDivider text="CEP" />

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.cepAluno}
                onBlur={checkCEP}
                className={blur}
                placeholder="Digite seu CEP"
                name="cepAluno"
                disabled={loading}
                required
              />

              {loading && (
                <CircularProgress
                  size={18}
                  sx={{
                    color: 'purple',
                    position: 'absolute',
                    top: '36%',
                    left: '75%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}

              <GlobalDivider text="Cidade" />

              <input
                type="text"
                onChange={handleChangeValues}
                placeholder={values.cidadeAluno}
                name="cidadeAluno"
                disabled
              />

              <GlobalDivider text="Rua/Distrito" />

              <input
                type="text"
                onChange={handleChangeValues}
                placeholder={values.ruaAluno}

                name="ruaAluno"
                disabled
              />

              <GlobalDivider text="Bairro" />

              <input
                type="text"
                onChange={handleChangeValues}
                placeholder={values.bairroAluno}

                name="bairroAluno"
                disabled
              />



              <GlobalDivider text="Complemento" />

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.complementoCasaAluno}
                placeholder="Insira um complemento aqui (caso haja)"
                name="complementoCasaAluno"
              />

            </>
          )}
          {steps[currentStep].id === "RESPONSAVEL" && (
            <>
              <h2>
                {steps[currentStep].title}
              </h2>

              <GlobalDivider text="Nome completo" />

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.nomeResponsavel}
                placeholder="Digite seu nome"
                name="nomeResponsavel"
                required
              />

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.sobrenomeResponsavel}
                placeholder="Digite seu sobrenome"
                name="sobrenomeResponsavel"
                required
              />

              <GlobalDivider text="Documentos do responsável" />

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.cpfResponsavel}
                placeholder="Digite seu CPF"
                name="cpfResponsavel"
                required
              />

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.rgResponsavel}
                placeholder="Digite seu RG"
                name="rgResponsavel"
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

            </>
          )}
          {steps[currentStep].id === "CONTATO" && (
            <>
              <h2>{steps[currentStep].title}</h2>

              <GlobalDivider text="Número do aluno" />

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.telAluno}
                placeholder="Insira um número de até 11 dígitos"
                name="telAluno"
                required
              />

              <GlobalDivider text="Número do responsável" />

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.telResponsavel}
                placeholder="Insira um número de até 11 dígitos"
                name="telResponsavel"
                required
              />

              <GlobalDivider text="Número reserva (opcional)" />

              <input
                type="text"
                onChange={handleChangeValues}
                value={values.telOpcional}
                placeholder="Insira um número de até 11 dígitos"
                name="telOpcional"
              />
            </>
          )}
          {steps[currentStep].id === "CONTA" && (
            <>
              <h2>{steps[currentStep].title}</h2>

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

          {currentStep < 4 &&
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

          {currentStep >= 4 &&
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
