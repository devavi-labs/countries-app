import Container from "@material-ui/core/Container";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import CountriesTable from "../components/CountriesTable";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { countriesError, countriesLoaded } from "../global/countries/actions";
import { wrapper } from "../global/store";
import useStyles from "../styles/home";
import fetchCountries from "../utils/fetchCountries";

const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Countries App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Countries">
          <SearchBar />
        </Header>
        <div className={classes.background} />
        <Container maxWidth="lg" className={classes.container}>
          <CountriesTable />
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
