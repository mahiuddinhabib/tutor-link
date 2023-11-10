"use client";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ITablePropTypes } from "@/types";
import { dynamicRenderer } from "@/helpers/table";


const RTable = ({
  headCells,
  items,
  children,
}: ITablePropTypes) => {

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-labelledby="tableTitle" size="medium">
          <TableHead>
            <TableRow>
              {headCells.map((headCell, i: number) => (
                <TableCell key={i}>{headCell.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, i) => (
              <TableRow key={i}>
                {headCells.map(({ value }) => (
                  <TableCell key={value}>
                    {dynamicRenderer(children, item, value)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default RTable;
