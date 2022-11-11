import { useState } from "react";
import "./activity.css";

import search from "../../_assets/js/search.json";

import Lottie from "lottie-react";
import TopBar from "../../components/UI/navbar/TopBar/TopBar";
import { ListClass } from "./ListClass";
import { ListStudent } from "./ListStudent";
import { AddActivity } from "./AddActivity";

export function InsertActivity() {
  const [stepSelect, setStepSelect] = useState({});

  const listClass = [
    {
      id: Math.random(),
      nameClass: "3ºB Desenvolvimento de sistemas - Português",
      alunos: [
        {
          id: Math.random(),
          nome: "Victor Hugo Carvalho Moreira dos Santos",
          rm: Math.random(),
          dataNasc: `${new Date().getDay} - ${new Date().getMonth} - ${
            new Date().getFullYear
          }`,
        },
        {
          id: Math.random(),
          nome: "Thiago Henrique da Silva Santos",
          rm: Math.random(),
          dataNasc: `${new Date().getDay} - ${new Date().getMonth} - ${
            new Date().getFullYear
          }`,
        },
        {
          id: Math.random(),
          nome: "Nicolle Christina Almeida de Souza",
          rm: Math.random(),
          dataNasc: `${new Date().getDay} - ${new Date().getMonth} - ${
            new Date().getFullYear
          }`,
        },
        {
          id: Math.random(),
          nome: "Bruno Calvo Barbosa",
          rm: Math.random(),
          dataNasc: `${new Date().getDay} - ${new Date().getMonth} - ${
            new Date().getFullYear
          }`,
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
          dataNasc: `${new Date().getDay} - ${new Date().getMonth} - ${
            new Date().getFullYear
          }`,
        },
        {
          id: Math.random(),
          nome: "Yan Mendonça",
          rm: Math.random(),
          dataNasc: `${new Date().getDay} - ${new Date().getMonth} - ${
            new Date().getFullYear
          }`,
        },
        {
          id: Math.random(),
          nome: "Bianca",
          rm: Math.random(),
          dataNasc: `${new Date().getDay} - ${new Date().getMonth} - ${
            new Date().getFullYear
          }`,
        },
        {
          id: Math.random(),
          nome: "Bruno Calvo Barbosa",
          rm: Math.random(),
          dataNasc: `${new Date().getDay} - ${new Date().getMonth} - ${
            new Date().getFullYear
          }`,
        },
      ],
    },

    {
      id: Math.random(),
      nameClass: "3ºA Administração - Português",
      alunos: [
        {
          id: Math.random(),
          nome: "Victor Hugo Carvalho Moreira dos Santos",
          rm: Math.random(),
          dataNasc: `${new Date().getDay} - ${new Date().getMonth} - ${
            new Date().getFullYear
          }`,
        },
        {
          id: Math.random(),
          nome: "Thiago Henrique da Silva Santos",
          rm: Math.random(),
          dataNasc: `${new Date().getDay} - ${new Date().getMonth} - ${
            new Date().getFullYear
          }`,
        },
        {
          id: Math.random(),
          nome: "Nicolle Christina Almeida de Souza",
          rm: Math.random(),
          dataNasc: `${new Date().getDay} - ${new Date().getMonth} - ${
            new Date().getFullYear
          }`,
        },
        {
          id: Math.random(),
          nome: "Bruno Calvo Barbosa",
          rm: Math.random(),
          dataNasc: `${new Date().getDay} - ${new Date().getMonth} - ${
            new Date().getFullYear
          }`,
        },
      ],
    },
  ];

  return (
    <>
      <TopBar PageTitle="Adicionar" PageSpan="Atividade" />
      <div className="activityContainer">
        <div className="selectClass">
          {stepSelect === "class"
            ? listClass.map((listClass) => (
                <div
                  key={listClass.id}
                  onClick={() => setStepSelect(listClass.alunos)}
                >
                  <ListClass
                    setStepSelect={setStepSelect}
                    nameClass={listClass.nameClass}
                  />
                </div>
              ))
            : listClass.map((listClass) => (
                <div key={listClass.toString()}>
                  <ListStudent setStepSelect={setStepSelect} />
                </div>
              ))}
        </div>

        <div className="contentActivity">
          {stepSelect != {} ? (
            <AddActivity setStepSelect={stepSelect} />
          ) : (
            <>
              <h1>Selecione uma turma primeiro</h1>

              <Lottie animationData={search} style={{ width: "50%" }} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
