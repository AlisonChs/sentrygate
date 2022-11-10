export function ListClass({ setStepSelect, nameClass }) {
 return (
  <div className="List" onClick={() => setStepSelect('student')}>
   <p>{nameClass}</p>
  </div>
 )
}