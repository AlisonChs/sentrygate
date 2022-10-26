export function ListStudent({ setStepSelect }) {
 return (
  <div className="List" onClick={() => setStepSelect('class')}>
   <img src='https://github.com/Victor-HM.png' alt="Foto do aluno" />
   <div className='listInformation'>

   </div>
   <p>Aluno</p>
  </div>
 )
}