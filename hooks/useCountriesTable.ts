import React from "react";
import { useSelector } from "react-redux";
import { CountriesState } from "../global/countries/types";
import { RootState } from "../global/types";
import { RouteQuery } from "../types/RouteQuery";
import getColumns from "../utils/getColumns";
import getRows from "../utils/getRows";

const useCountriesTable = (query: RouteQuery) => {
  const { countries, error } = useSelector<RootState, CountriesState>(
    (state) => state.countries
  );

  const columns = React.useMemo(() => getColumns(), []);

  const rows = React.useMemo(
    () => getRows(countries, { q: query.q, qf: query.qf }),
    [countries, query.q, query.qf]
  );

  return { columns, rows, error };
};

export default useCountriesTable;
