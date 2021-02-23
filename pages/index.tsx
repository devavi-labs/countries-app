import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { DataGrid, SortModelParams } from "@material-ui/data-grid";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { useGetAllCountries } from "../global/getAllCountries";
import useStyles from "../styles/home";
import { useRouter } from "next/router";
import sortQueryToSortModel from "../utils/sortQueryToSortModel";
import sortModelToSortQuery from "../utils/sortModelToSortQuery";
import sortQueryToQueryString from "../utils/sortQueryToQueryString";
import getColumns from "../utils/getColumns";
import getRows from "../utils/getRows";
import { RouteQuery } from "../types/RouteQuery";

const Home: NextPage = () => {
  const classes = useStyles();

  const router = useRouter();

  const query = React.useMemo(() => (router.query as unknown) as RouteQuery, [
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

  const columns = React.useMemo(() => getColumns(), []);
  const rows = React.useMemo(
    () => getRows(countries, { q: query.q, qf: query.qf }),
    [countries, query.q, query.qf]
  );

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
            disableColumnFilter
            pageSize={25}
          />
        </Container>
      </main>
    </div>
  );
};

export default Home;
