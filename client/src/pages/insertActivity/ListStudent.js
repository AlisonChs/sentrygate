export function ListStudent({ setStepSelect }) {
 return (
  <div className="List" onClick={() => setStepSelect('class')}>
   <p>Aluno</p>
  </div>
 )
}