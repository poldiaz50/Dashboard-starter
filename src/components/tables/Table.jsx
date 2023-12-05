import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trakingId, date, status) {
  return { name, trakingId, date, status };
}

const rows = [
  createData("Lasaña de Pollo", 18908424, "2 de marzo 2023", "Aprobada"),
  createData("Pasta Napolitana", 18908424, "2 de marzo 2023", "Pendiente"),
  createData("Raviolis de Carne", 18908424, "2 de marzo 2023", "Aprobada"),
  createData("Pasteles", 18908424, "2 de marzo 2023", "Entregando"),
];

const makeStyles = (status) => {
  if (status === "Aprobada") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pendiente") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else if (status === "Entregando") {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Ordenes Recientes</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell align="left">ID de Rastreo</TableCell>
              <TableCell align="left">Fecha</TableCell>
              <TableCell align="left">Estado</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trakingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyles(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left" className="Details">
                  Detalles
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
