import React from "react";
import {
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
} from "@mui/x-data-grid";
import Action from "./Action";

export const columns: GridColDef[] = [
  { field: "itemNo", headerName: "Item No.", width: 100, editable: true },
  { field: "desc", headerName: "Description", width: 580, editable: true },
  {
    field: "qty",
    headerName: "Quantity",
    width: 100,
    editable: true,
  },
  {
    field: "rate",
    headerName: "Rate",
    width: 100,
    editable: true,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 100,
    editable: true,
  },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: () => <Action />,
  },
  //   {
  //     field: "dateCreated",
  //     headerName: "Date Created",
  //     type: "date",
  //     width: 180,
  //     editable: true,
  //   },
];

export const rows: GridRowsProp = [
  {
    id: 1,
    itemNo: 1.1,
    desc: "Clearing of Ordinary Soil, Root and a made up Ground of the site to an average depth of 20 cm from natural ground level ",
    qty: 840.0,
    rate: 18,
    amount: 15120,
  },
  {
    id: 2,
    itemNo: 1.2,
    desc: "Bulk excavation in an ordinary soil  to a depth not exceeding  150 cm from  Cleared Level",
    qty: 1247.085,
    rate: 122,
    amount: 152144.37,
  },
  {
    id: 3,
    itemNo: 1.3,
    desc: "Bulk excavation in an ordinary soil  to a depth not exceeding  150 cm from  Cleared Level",
    qty: 1247.085,
    rate: 122,
    amount: 152144.37,
  },
  {
    id: 4,
    itemNo: 1.4,
    desc: "Bulk excavation in an ordinary soil  to a depth not exceeding  150 cm from  Cleared Level",
    qty: 1247.085,
    rate: 122,
    amount: 152144.37,
  },
  {
    id: 5,
    itemNo: 1.5,
    desc: "Bulk excavation in an ordinary soil  to a depth not exceeding  150 cm from  Cleared Level",
    qty: 1247.085,
    rate: 122,
    amount: 152144.37,
  },
  {
    id: 6,
    itemNo: 1.6,
    desc: "Bulk excavation in an ordinary soil  to a depth not exceeding  150 cm from  Cleared Level",
    qty: 1247.085,
    rate: 122,
    amount: 152144.37,
  },
  {
    id: 7,
    itemNo: 1.7,
    desc: "Bulk excavation in an ordinary soil  to a depth not exceeding  150 cm from  Cleared Level",
    qty: 1247.085,
    rate: 122,
    amount: 152144.37,
  },
];
