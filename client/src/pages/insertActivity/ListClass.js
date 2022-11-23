export function ListClass({ setSelectClass, listClass }) {
 return (
  <div className="List" onClick={() => setSelectClass(listClass.alunos)}>
    
   {listClass.nameClass}
  </div>
 )
}