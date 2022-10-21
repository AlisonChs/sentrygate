import { useState } from "react";

import "./activity.css";
import search from '../../_assets/js/search.json'

import Lottie from "lottie-react";
import TopBar from "../../components/UI/navbar/TopBar/TopBar";
import { ListClass } from "./ListClass";
import { ListStudent } from "./ListStudent";
import { AddActivity } from "./AddActivity";
export function InsertActivity() {

 const [stepSelect, setStepSelect] = useState('class')

  const listClass = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <TopBar PageTitle="Adicionar" PageSpan="Atividade" />
      <div className="activityContainer">
        <div className="selectClass">

         {
          stepSelect === 'class' 
          ? 
          listClass.map((listClass) => (
            <div key={listClass.toString()}>
              <ListClass setStepSelect={setStepSelect} />
            </div>
          ))
          : listClass.map((listClass) => (
           <div key={listClass.toString()}>
             <ListStudent setStepSelect={setStepSelect} />
           </div>
         ))

          }

        </div>

        <div className="contentActivity">
         {
          stepSelect === 'class'
          ? (
           <>
           <h1>Selecione uma turma primeiro</h1>

           <Lottie animationData={search} style={{ width: '50%' }} />
          </>
          ) :
          <AddActivity />
         }
         
        </div>
      </div>
    </>
  );
}
