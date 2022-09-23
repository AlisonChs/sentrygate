import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme, color }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: color,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, nota1, nota2, nota3, nota4) {
  return { name, nota1, nota2, nota3, nota4 };
}

const rows = [
  createData("MATEMÁTICA", 5, 6, 7, 4),
  createData("LÍNGUA PORTUGUESA", 8, 9, 8, 10),
  createData("LÍNGUA ESTRANGEIRA MODERNA", 6, 5, 7, 6),
  createData("FILOSOFIA", 1, 2, 3, 4),
  createData("DESENVOLVIMENTO DE SISTEMAS", 6, 5, 7, 6),
  createData("BIOLOGIA", 5, 6, 7, 4),
  createData("PROGRAMAÇÃO WEB", 1, 2, 3, 4),
  createData("QUALIDADE E TESTE DE SOFTWARE", 6, 5, 7, 6),
  createData("SISTEMAS EMBARCADOS", 6, 5, 7, 6),
  createData("GEOGRAFIA", 1, 2, 3, 4),
];

export function TableBoletim() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Componente Curricular</StyledTableCell>
            <StyledTableCell align="right">1º Bim</StyledTableCell>
            <StyledTableCell align="right">2º Bim</StyledTableCell>
            <StyledTableCell align="right">3º Bim</StyledTableCell>
            <StyledTableCell align="right">4º Bim</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right" color={row.nota1 <= 5 ? '#F10A0A' : '#0C71AA'}>{row.nota1}</StyledTableCell>
              <StyledTableCell align="right" color={row.nota2 <= 5 ? '#F10A0A' : '#0C71AA'}>{row.nota2}</StyledTableCell>
              <StyledTableCell align="right" color={row.nota3 <= 5 ? '#F10A0A' : '#0C71AA'}>{row.nota3}</StyledTableCell>
              <StyledTableCell align="right" color={row.nota4 <= 5 ? '#F10A0A' : '#0C71AA'}>{row.nota4}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
