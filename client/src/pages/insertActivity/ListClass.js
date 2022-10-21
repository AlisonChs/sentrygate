export function ListClass({ setStepSelect }) {
 return (
  <div className="List" onClick={() => setStepSelect('student')}>
   <p>Turma</p>
  </div>
 )
}