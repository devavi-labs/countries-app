import Link from "@material-ui/core/Link";
import { CellParams, ColDef } from "@material-ui/data-grid";
import React from "react";
import Flag from "../components/Flag";
import { Country } from "../models/country";
import getAlpha2Code from "./getAlpha2Code";

const getColumns = (countries: Array<Country>): Array<ColDef> => [
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
    renderCell: (params: CellParams) => (
      <Link
        href={`/country/${getAlpha2Code(params.value as string, countries)}`}
      >
        {params.value}
      </Link>
    ),
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
