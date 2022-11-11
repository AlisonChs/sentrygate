import { useEffect, useState } from "react";

import { Add } from "@mui/icons-material";
import Divider from "@mui/material/Divider";

export function AddActivity() {
  const [saveActivity, setSaveActivity] = useState(null);

  function AddActivity() {
    let activity = {
      id: Math.random(),
      nome: "",
      nota: 0,
      desc: '',
      obs: ''
    };
    return activity;
  }

  const [arrayActivity, setArrayActivity] = useState([AddActivity()]);

  const changeValue = (e, id) => {
    const actIndex = arrayActivity.findIndex((act) => {
      return act.id === id;
    });

    const newActivity = [...arrayActivity];

    newActivity[actIndex][e.target.name] = e.target.value;

    setArrayActivity(newActivity);
  }

  return (
    <div className="containerActivity">
      <div className="studentContainer"></div>

      <div className="insertActivity">
        <div className="addActivity">
          <p>Avaliações</p>

          <div className="inputAvaliacao">
            {arrayActivity.map((list) => {
              return (
                <div
                  key={list.id}
                  className="input"
                  onClick={() => {
                    setSaveActivity({});
                    setSaveActivity(list);
                  }}
                >
                  <p>{list.nome}</p>
                  <Divider orientation="vertical" flexItem />
                  <p>{list.nota}</p>
                </div>
              );
            })}
          </div>

          <button
            className="btnAdd"
            onClick={() => setArrayActivity((prev) => [...prev, AddActivity()])}
            // onClick={() => setArrayActivity((prev) => [...prev, AddActivity()])}
          >
            <Add />
          </button>
        </div>

        {saveActivity != null ? (
          <div className="avaliacaoContainer">
            <div>
              <input
                type="text"
                placeholder="Nome da avaliação"
                value={saveActivity.nome}
                name='nome'
                onChange={(e) => changeValue(e, saveActivity.id)}
              />
              <input
                type="number"
                placeholder="Nota"
                value={saveActivity.nota}
                name='nota'
                onChange={(e) => changeValue(e, saveActivity.id)}
              />
            </div>
            <input 
              type="text" 
              placeholder="Descrição"
              value={saveActivity.desc}
              name='desc'
              onChange={(e) => changeValue(e, saveActivity.id)} 
            />
            <input 
              type="text" 
              placeholder="Observações"
              value={saveActivity.obs}
              name='obs'
              onChange={(e) => changeValue(e, saveActivity.id)} />
          </div>
        ) : (
          <></>
        )}

        {/* <div className="avaliacaoContainer">
          <div>
            <input type="text" placeholder="Nome da avaliação" />
            <input type="number" placeholder="Nota" />
          </div>
          <input type="text" placeholder="Descrição" />
          <input type="text" placeholder="Observações" />
        </div> */}
      </div>
    </div>
  );
}
