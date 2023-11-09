// @ts-nocheck
"use client";

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import { getComparator, stableSort } from "@/helpers/table";
import { useGetUsersQuery } from "@/redux/api/userApi";
import Link from "next/link";
import { Button, Modal } from "@mui/material";

const headCells = [
  {
    id: "name",
    label: "Name",
  },
  {
    id: "email",
    label: "Email",
  },
  {
    id: "action",
    label: "Action",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
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

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function PaginatedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);

  const { data: users, isLoading } = useGetUsersQuery(undefined);
  console.log(isLoading, users);

  const customers = users?.filter((b: any) => b.role === "customer");

  const deleteHandler = async (id: string) => {
    // message.loading("Deleting.....", 0.8);
    /*       try {
        const res = await deleteUser(id);
        // console.log(res);
        if (res) {
          message.success("User Deleted");
          setOpen(false);
        }
      } catch (err: any) {
        //   console.error(err.message);
        message.error(err.message);
      } */
    setOpen(false);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - customers?.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(customers, getComparator(order, orderBy))?.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, customers]
  );

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", my: 2 }}>
          <Typography
            variant="h6"
            id="tableTitle"
            sx={{ p: 3, textAlign: "center" }}
          >
            CUSTOMERS
          </Typography>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size="medium"
            >
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={customers?.length}
              />
              <TableBody>
                {visibleRows?.map((row, index) => {
                  // const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover tabIndex={-1} key={row.id}>
                      <TableCell
                        //   component="th"
                        // id={labelId}
                        scope="row"
                      >
                        {row?.name}
                      </TableCell>
                      <TableCell>{row?.email}</TableCell>
                      <TableCell>
                        <>
                          <Link href={`/admin/customer/${row?.id}`}>
                            <Button
                              style={{ marginRight: "7px" }}
                              type="primary"
                            >
                              {/* <DeleteOutlined /> */}
                              Edit
                            </Button>
                          </Link>
                          <Button
                            onClick={() => {
                              setOpen(true);
                              // setCustomerId(row?.id);
                            }}
                          >
                            {/* <DeleteOutlined /> */}
                            Delete
                          </Button>
                        </>
                      </TableCell>
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
            count={customers?.length | 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ backdropFilter: "blur(5px)" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            borderRadius: 5,
            boxShadow: 24,
            p: 4,
            backgroundColor: "background.paper",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Warning
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure to delete this user?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 3,
              // backgroundColor: "red",
            }}
          >
            <Button variant="outlined" color="error" onClick={deleteHandler}>
              Yes
            </Button>
            <Button variant="outlined" color="secondary" onClick={()=>{setOpen(false)}}>
              No
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
