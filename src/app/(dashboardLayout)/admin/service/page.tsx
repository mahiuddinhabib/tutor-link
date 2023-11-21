"use client";

import * as React from "react";
import { useGetUsersQuery } from "@/redux/api/userApi";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import RConfirmation from "@/components/ui/ConfirmationDiaglog";
import PaginatedTable from "@/components/ui/TableWithPagination";
import { selectKeys } from "@/helpers/table";
import Link from "next/link";
import {
  useDeleteServiceMutation,
  useServicesQuery,
} from "@/redux/api/serviceApi";

const headCells = [
  {
    value: "title",
    label: "Title",
  },
  {
    value: "price",
    label: "Price",
  },
  {
    value: "tutor.name",
    label: "Tutor",
  },
  {
    value: "subject.title",
    label: "Subject",
  },
  {
    value: "actions",
    label: "Actions",
  },
];

export default function ServiceTable() {
  const query: Record<string, any> = {};
  const [order, setOrder] = React.useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = React.useState("title");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [open, setOpen] = React.useState(false);
  const [sId, setSId] = React.useState("");

  const [deleteService] = useDeleteServiceMutation();

  query["limit"] = rowsPerPage;
  query["page"] = page;
  query["sortBy"] = orderBy;
  query["sortOrder"] = order;

  const { data, isLoading } = useServicesQuery({  });

  const services = data?.services;
  const meta = data?.meta;

  let selectedServices;
  if (services) {
    selectedServices = selectKeys(services, [
      "title",
      "price",
      "tutor",
      "subject",
    ]);
  }

  console.log(selectedServices);

  const handleOk = () => {
    console.log(`id: ${sId}`);
    setOpen(false);
  };

  return (
    <div>
      <PaginatedTable
        headCells={headCells}
        items={selectedServices || []}
        order={order}
        setOrder={setOrder}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      >
        {(item) => (
          <>
            <IconButton
              aria-label="delete"
              color="error"
              onClick={() => {
                setOpen(true);
                setSId(item?.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
            <Link href={`/admin/customer/${item?.id}`}>
              <IconButton aria-label="delete" color="secondary">
                <EditIcon />
              </IconButton>
            </Link>
          </>
        )}
      </PaginatedTable>
      <RConfirmation
        open={open}
        handleOk={handleOk}
        handleClose={() => setOpen(false)}
        DialogText="Are you sure to delete this user?"
      />
    </div>
  );
}
