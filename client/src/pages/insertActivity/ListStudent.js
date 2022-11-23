export function ListStudent({ listStudent, setSelectStudent }) {

return (
 <div className="List" onClick={() => setSelectStudent(listStudent)}>
   <img src="https://github.com/Victor-HM.png" alt="Foto do aluno" />
   <div className="listInformation"></div>
   <p>{listStudent.nome}</p>
 </div>
);
}