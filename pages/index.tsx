import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { CellParams, ColDef, DataGrid } from "@material-ui/data-grid";
import { useGetAllCountries } from "../global/getAllCountries";
import Flag from "../components/Flag";
import Link from "@material-ui/core/Link";

const Home: NextPage = () => {
  const useStyles = makeStyles<Theme>(({ breakpoints: { width } }) => ({
    toolbar: {
      width: "100%",
      maxWidth: width("lg"),
      margin: "0 auto",
    },
    title: {
      fontWeight: "bold",
    },
    container: {
      height: "calc(100vh - 80px)",
    },
  }));
  const classes = useStyles();

  const [
    { countries, fetching, error },
    getAllCountries,
  ] = useGetAllCountries();

  React.useEffect(() => {
    getAllCountries();
  }, []);

  const getAlphaCode = (fullName: string) => {
    return countries.find((country) => country.name === fullName)?.alpha2Code;
  };

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
        <Link href={`/country/${getAlphaCode(params.value as string)}`}>
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
          />
        </Container>
      </main>
    </div>
  );
};

export default Home;
