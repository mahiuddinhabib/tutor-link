"use client";

import { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import { dynamicRenderer, getComparator, stableSort } from "@/helpers/table";
import { IHeadCell, ITablePropTypes } from "@/types";

interface IEnhancedTableHeadProps {
  headCells: IHeadCell[];
  order: "asc" | "desc";
  orderBy: string;
  onRequestSort: any;
}

function EnhancedTableHead(props: IEnhancedTableHeadProps) {
  const { headCells, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: any) => (event: any) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells?.map((headCell) => (
          <TableCell
            key={headCell?.value}
            sortDirection={orderBy === headCell?.value ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell?.value}
              direction={orderBy === headCell?.value ? order : "asc"}
              onClick={createSortHandler(headCell?.value)}
            >
              {headCell?.label}
              {orderBy === headCell?.value ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function PaginatedTable({
  headCells,
  items,
  children,
  ...otherProps
}: ITablePropTypes) {
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { order, setOrder, orderBy, setOrderBy, page, setPage } = otherProps;

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === "asc";
    if (setOrder) setOrder(isAsc ? "desc" : "asc");
    if (setOrderBy) setOrderBy(property);
  };

  const handleChangePage = (event: any, newPage: number) => {
    if (setPage) setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    if (setPage) setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty items.
  const emptyRows =
    (page as number) > 0
      ? Math.max(0, (1 + (page as number)) * rowsPerPage - items?.length)
      : 0;

  const visibleRows: Record<string, any>[] = useMemo(
    () =>
      stableSort(items, getComparator(order, orderBy))?.slice(
        (page as number) * rowsPerPage,
        (page as number) * rowsPerPage + rowsPerPage
      ),
    [items, order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", my: 2 }}>
        <TableContainer>
          <Table
            // sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              headCells={headCells}
              order={order as "asc" | "desc"}
              orderBy={orderBy as string}
              onRequestSort={handleRequestSort}
              // rowCount={items?.length || 0}
            />
            <TableBody>
              {visibleRows?.map((item, index) => {
                return (
                  <TableRow hover tabIndex={-1} key={item?.id}>
                    {headCells?.map(({ value }) => (
                      <TableCell
                        key={value}
                        // component="th"
                        // id={labelId}
                        scope="row"
                      >
                        {dynamicRenderer(children, item, value)}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={items?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page as number}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
