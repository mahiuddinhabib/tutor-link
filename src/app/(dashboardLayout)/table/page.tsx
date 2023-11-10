"use client";

import PaginatedTable from "@/components/ui/TableWithPagination";
import { selectKeys } from "@/helpers/table";
import { Button } from "@mui/material";

const headCells = [
  {
    value: "name",
    label: "Name",
  },
  {
    value: "address",
    label: "Address",
  },
  {
    value: "actions",
    label: "Actions",
  },
];

const items = [
  {
    id: 1,
    name: "Cupcake",
    email: "amail@example.com",
    address: "xyz",
    phone: "+934534553",
  },
  {
    id: 2,
    name: "Donut",
    email: "dmail@example.com",
    address: "xyz",
    phone: "+934534553",
  },
  {
    id: 3,
    name: "Eclair",
    email: "qmail@example.com",
    address: "xyz",
    phone: "+934534553",
  },
  {
    id: 4,
    name: "Frozen yoghurt",
    email: "whymail@example.com",
    address: "xyz",
    phone: "+934534553",
  },
  {
    id: 5,
    name: "Gingerbread",
    email: "nomail@example.com",
    address: "xyz",
    phone: "+934534553",
  },
  {
    id: 6,
    name: "Honeycomb",
    email: "mail@example.com",
    address: "xyz",
    phone: "+934534553",
  },
  {
    id: 7,
    name: "Ice cream sandwich",
    email: "xmail@example.com",
    address: "xyz",
    phone: "+934534553",
  },
  {
    id: 8,
    name: "Jelly Bean",
    email: "mail@example.com",
    address: "xyz",
    phone: "+934534553",
  },
  {
    id: 9,
    name: "KitKat",
    email: "ymail@example.com",
    address: "xyz",
    phone: "+934534553",
  },
  {
    id: 10,
    name: "Lollipop",
    email: "mail@example.com",
    address: "xyz",
    phone: "+934534553",
  },
  {
    id: 11,
    name: "Marshmallow",
    email: "mail@example.com",
    address: "xyz",
    phone: "+934534553",
  },
  {
    id: 12,
    name: "Nougat",
    email: "email@example.com",
    address: "xyz",
    phone: "+934534553",
  },
  {
    id: 13,
    name: "Oreo",
    email: "mail@example.com",
    address: "xyz",
    phone: "+934534553",
  },
];

const Table = () => {
  const selectedItems = selectKeys(items, ["id", "name", "address"]);
  return (
    <div>
      <PaginatedTable headCells={headCells} items={selectedItems}>
        {(item) => <Button onClick={() => console.log(item)}>btn2</Button>}
      </PaginatedTable>
    </div>
  );
};

export default Table;
