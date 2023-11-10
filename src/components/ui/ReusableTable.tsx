// // @ts-nocheck
"use client";

import React from "react";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ITablePropTypes } from "@/types";
import { dynamicRenderer } from "@/helpers/table";

/* interface ITablePropTypes {
  headCells: { value: string; label: string }[];
  items: { [key: string]: any }[];
  children: (item: { [key: string]: any }) => React.ReactNode;
} */

const RTable = ({
  headCells,
  items,
  children,
  ...otherProps
}: ITablePropTypes) => {
  /*   const rowConfig = {
    ...otherProps,
  }; */

  /*   const dynamicRenderer = (item: { [key: string]: any }, value: string) => {
    if (value === "actions") {
      return children(item);
    } else {
      return item[value];
    }
  }; */

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
