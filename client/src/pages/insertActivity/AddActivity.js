import { useState } from "react";

import { Add } from "@mui/icons-material";
import Divider from "@mui/material/Divider";

export function AddActivity() {
  const [saveActivity, setSaveActivity] = useState(null);

  function AddActivity() {
    let activity = {
      nome: "",
      nota: 0,
      description: "",
      observation: "",
    };
    return activity;
  }

  const [arrayActivity, setArrayActivity] = useState([AddActivity()]);

  console.log(saveActivity);

  return (
    <div className="containerActivity">
      <div className="studentContainer"></div>

      <div className="insertActivity">
        <div className="addActivity">
          <p>Avaliações</p>

          <div className="inputAvaliacao">
            {arrayActivity.map((list) => {
              return (
                <div className="input" onClick={() => setSaveActivity(list)}>
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
              <input type="text" placeholder="Nome da avaliação" />
              <input type="number" placeholder="Nota" />
            </div>
            <input type="text" placeholder="Descrição" />
            <input type="text" placeholder="Observações" />
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
