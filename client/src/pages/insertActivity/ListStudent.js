import { Avatar } from "@mui/material";

export function ListStudent({ listStudent, setSelectStudent }) {

return (
 <div className="List" onClick={() => setSelectStudent(listStudent)}>
   <Avatar src={listStudent.photo} alt="Foto do aluno" />
   <div className="listInformation"></div>
   <p>{listStudent.nome}</p>
 </div>
);
}