import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { DataGrid, SortModelParams } from "@material-ui/data-grid";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { countriesError, countriesLoaded } from "../global/countries/actions";
import { CountriesState } from "../global/countries/types";
import { wrapper } from "../global/store";
import { RootState } from "../global/types";
import useStyles from "../styles/home";
import { RouteQuery } from "../types/RouteQuery";
import fetchCountries from "../utils/fetchCountries";
import getColumns from "../utils/getColumns";
import getRows from "../utils/getRows";
import mergeSortingQuery from "../utils/mergeSortingQuery";
import sortModelToSortQuery from "../utils/sortModelToSortQuery";
import sortQueryToSortModel from "../utils/sortQueryToSortModel";

const Home: NextPage = () => {
  const classes = useStyles();

  const router = useRouter();

  const query = React.useMemo(() => (router.query as unknown) as RouteQuery, [
    router.query,
  ]);

  const sortModel = React.useMemo(() => sortQueryToSortModel(query), [query]);

  const handleSortModelChange = (params: SortModelParams) => {
    if (params.sortModel !== sortModel) {
      const sortingQuery = sortModelToSortQuery(params.sortModel);

      const queryString = mergeSortingQuery(sortingQuery, router.query);

      const url = queryString ? `/?${queryString}` : "/";

      router.push(url);
    }
  };

  const { countries, error } = useSelector<RootState, CountriesState>(
    (state) => state.countries
  );

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
            <SearchBar />
          </Toolbar>
        </AppBar>
        <div className={classes.background} />
        <Container maxWidth="lg" className={classes.container}>
          <DataGrid
            error={error}
            columns={columns}
            rows={rows}
            sortModel={sortModel}
            onSortModelChange={handleSortModelChange}
            disableColumnFilter
            pageSize={25}
            className={classes.table}
            hideFooterSelectedRowCount
          />
        </Container>
        <Footer />
      </main>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    try {
      const countries = await fetchCountries();
      store.dispatch(countriesLoaded(countries));
    } catch (err) {
      store.dispatch(countriesError(err.message));
    }
  }
);

export default Home;
