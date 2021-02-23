import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  CellParams,
  ColDef,
  DataGrid,
  SortModelParams,
} from "@material-ui/data-grid";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Flag from "../components/Flag";
import { useGetAllCountries } from "../global/getAllCountries";
import useStyles from "../styles/home";
import { useRouter } from "next/router";
import { SortingQuery } from "../types/sortingQuery";
import sortQueryToSortModel from "../utils/sortQueryToSortModel";
import sortModelToSortQuery from "../utils/sortModelToSortQuery";
import sortQueryToQueryString from "../utils/sortQueryToQueryString";
import getAlpha2Code from "../utils/getAlpha2Code";

const Home: NextPage = () => {
  const classes = useStyles();

  const router = useRouter();

  const query = React.useMemo(() => (router.query as unknown) as SortingQuery, [
    router.query,
  ]);

  const sortModel = React.useMemo(() => sortQueryToSortModel(query), [query]);

  const handleSortModelChange = (params: SortModelParams) => {
    if (params.sortModel !== sortModel) {
      const query = sortModelToSortQuery(params.sortModel);
      const queryString = sortQueryToQueryString(query);
      if (queryString) {
        router.push(`/${queryString}`);
      } else {
        router.push("/");
      }
    }
  };

  const [
    { countries, fetching, error },
    getAllCountries,
  ] = useGetAllCountries();

  React.useEffect(() => {
    getAllCountries();
  }, []);

  const columns: Array<ColDef> = [
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

  const rows = countries.map((country) => ({
    ...country.toJSON(),
    id: country.alpha2Code,
  }));

  return (
    <div>
      <Head>
        <title>Countries App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppBar position="sticky" elevation={0}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h5" component="span" className={classes.title}>
              Countries
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" className={classes.container}>
          <DataGrid
            loading={fetching}
            error={error}
            columns={columns}
            rows={rows}
            sortModel={sortModel}
            onSortModelChange={handleSortModelChange}
          />
        </Container>
      </main>
    </div>
  );
};

export default Home;
