import { CellParams, ColDef } from "@material-ui/data-grid";
import React from "react";
import Flag from "../components/Flag";

const getColumns = (): Array<ColDef> => [
  {
    field: "flag",
    headerName: "Flag",
    renderCell: (params: CellParams) => <Flag url={params.value as string} />,
    width: 80,
  },
  {
    field: "name",
    type: "string",
    headerName: "Name",
    width: 200,
  },
  {
    field: "capital",
    type: "string",
    headerName: "Capital",
    width: 200,
  },
  {
    field: "region",
    type: "string",
    headerName: "Region",
    width: 200,
  },
  {
    field: "subregion",
    type: "string",
    headerName: "Sub - Region",
    width: 200,
  },
  {
    field: "population",
    type: "number",
    headerName: "Population",
    width: 140,
  },
  {
    field: "area",
    type: "number",
    headerName: "Area",
    width: 120,
  },
];

export default getColumns;
