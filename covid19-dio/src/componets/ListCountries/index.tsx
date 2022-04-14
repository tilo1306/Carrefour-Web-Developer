/* eslint-disable react/no-array-index-key */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as C from "./styles";
import {Countries} from "../../types/Countries";

type Props = {
  list: Countries;
};

export const ListCountries = ({list}: Props) => {
  function createData(Descrição: string, Numeros: number) {
    return {Descrição, Numeros};
  }
  const rows = [
    createData("Casos", list.cases),
    createData("Mortes", list.deaths),
    createData("Recuperados", list.recovered),
    createData("Casos no dia", list.todayCases),
    createData("Morte no dia", list.todayDeaths),
    createData("Positivo", list.active),
    createData("Criticos", list.critical),
  ];
  return (
    <C.Container>
      <img src={list.countryInfo.flag} alt={list.country} />
      <h1>{list.country}</h1>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 50}} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left" className="thead">
                Descrição
              </TableCell>
              <TableCell align="right" className="thead">
                Numeros
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{"&:last-child td, &:last-child th": {border: 0}}}
              >
                <TableCell component="th" scope="row">
                  {row.Descrição}
                </TableCell>
                <TableCell align="right">{row.Numeros}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </C.Container>
  );
};
