import { useState } from "react";
import "./activity.css";

import search from "../../_assets/js/search.json";

import Lottie from "lottie-react";
import TopBar from "../../components/UI/navbar/TopBar/TopBar";
import { ListClass } from "./ListClass";
import { ListStudent } from "./ListStudent";
import { AddActivity } from "./AddActivity";
import { Box, Grow, Modal, Typography } from "@mui/material";

export function InsertActivity() {
  const listClass = [
    {
      id: Math.random(),
      nameClass: "3ºB Desenvolvimento de sistemas - Português",
      alunos: [
        {
          id: Math.random(),
          nome: "Victor Hugo Carvalho",
          rm: Math.random(),
          presenca: "75%",
          atividade: [],
        },
        {
          id: Math.random(),
          nome: "Thiago Henrique da Silva",
          rm: Math.random(),
          presenca: "75%",
          atividade: [],
        },
        {
          id: Math.random(),
          nome: "Nicolle Christina",
          rm: Math.random(),
          presenca: "75%",
          atividade: [],
        },
        {
          id: Math.random(),
          nome: "Bruno Barbosa",
          rm: Math.random(),
          presenca: "75%",
          atividade: [],
        },
      ],
    },

    {
      id: Math.random(),
      nameClass: "3ºA Desenvolvimento de sistemas - Português",
      alunos: [
        {
          id: Math.random(),
          nome: "Simone",
          rm: Math.random(),
          presenca: "75%",
          atividade: [],
        },
        {
          id: Math.random(),
          nome: "Yan Mendonça",
          rm: Math.random(),
          presenca: "75%",
          atividade: [],
        },
        {
          id: Math.random(),
          nome: "Bianca",
          rm: Math.random(),
          presenca: "75%",
          atividade: [],
        },
        {
          id: Math.random(),
          nome: "Bruno Barbosa",
          rm: Math.random(),
          presenca: "75%",
          atividade: [],
        },
      ],
    },

    {
      id: Math.random(),
      nameClass: "3ºA Administração - Português",
      alunos: [
        {
          id: Math.random(),
          nome: "Victor Hugo Carvalho",
          rm: Math.random(),
          presenca: "75%",
          atividade: [],
        },
        {
          id: Math.random(),
          nome: "Thiago Henrique da Silva",
          rm: Math.random(),
          presenca: "75%",
          atividade: [],
        },
        {
          id: Math.random(),
          nome: "Nicolle Christina",
          rm: Math.random(),
          presenca: "75%",
          atividade: [],
        },
        {
          id: Math.random(),
          nome: "Bruno Barbosa",
          rm: Math.random(),
          presenca: "75%",
          atividade: [],
        },
      ],
    },
  ];

  const [globalActivity, setGlobalActivity] = useState({
    id: Math.random(),
    nome: "",
    nota: 0,
    desc: "",
    obs: "",
  });
  const [selectClass, setSelectClass] = useState(null);
  const [selectStudent, setSelectStudent] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const style = {
    width: 500,
    height: 600,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#210D41",
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  };

  const changeValue = (value) => {
    setGlobalActivity((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  function addGlobalActivity() {
    const newClass = [...selectClass];
    for (let i = 0; i < selectClass.length; i++) {
      setGlobalActivity((prevValue) => ({
        ...prevValue,
        id: Math.random(),
      }));
      newClass[i].atividade.push(globalActivity);
    }
    setSelectClass(newClass);
    setOpenModal(false);
  }

  return (
    <>
      <TopBar PageTitle="Adicionar" PageSpan="Atividade" />

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Adicionar atividade
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, opacity: 0.5 }}>
            Essa atividade será adicionado para todos o alunos presentes nesta
            turma
          </Typography>

          <div className="dividerActivity">
            <input
              type="text"
              placeholder="Nome da atividade"
              name="nome"
              onChange={changeValue}
            />
            <input type="number" name="nota" onChange={changeValue} />
          </div>

          <input
            type="text"
            placeholder="Descrição"
            name="desc"
            onChange={changeValue}
          ></input>
          <input
            type="text"
            placeholder="Observações"
            name="obs"
            onChange={changeValue}
          ></input>
          <button type="submit" onClick={addGlobalActivity}>
            Adicionar atividade
          </button>
        </Box>
      </Modal>
      <div className="activityContainer">
        {selectClass !== null ? (
          <div className="buttonAdd">
            <button onClick={() => setOpenModal(!openModal)}>
              Adicionar atividade para todos os alunos
            </button>
          </div>
        ) : (
          <></>
        )}
        <div className="areaStudent">
          <Box sx={{display: `flex`, flexDirection: `column`}} className="selectClass">
            {selectClass !== null ? (
              <div className="buttonAdd">
                <button onClick={() => {
                  setSelectClass(null)
                  setSelectStudent(null)
                }}>
                  Escolher turma
                </button>
              </div>
            ) : (
              <></>
            )}
            {selectClass === null
              ? listClass.map((listClass) => (
                  <Box sx={{alignItems: `center`, display: `flex`, justifyContent: `center`}} key={listClass.id}>
                    <ListClass
                      setSelectClass={setSelectClass}
                      listClass={listClass}
                    />
                  </Box>
                ))
              : selectClass.map((listStudent) => (
                  <Box sx={{display: `flex`, flexDirection: `row`, m: 1}} key={listStudent.id}>
                    <ListStudent
                      listStudent={listStudent}
                      setSelectStudent={setSelectStudent}
                    />
                  </Box>
                ))}
          </Box>

          <div className="contentActivity">
            {selectStudent != null ? (
              <AddActivity
                selectClass={selectClass}
                setSelectClass={setSelectClass}
                selectStudent={selectStudent}
                setSelectStudent={setSelectStudent}
              />
            ) : (
              <>
                <h1>Selecione uma turma e aluno primeiro</h1>

                <Lottie animationData={search} style={{ width: "50%" }} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
