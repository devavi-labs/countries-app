import { ColDef } from "@material-ui/data-grid";
import React from "react";
import { useSelector } from "react-redux";
import { CountriesState } from "../global/countries/types";
import { RootState } from "../global/types";
import { ICountry } from "../models/country";
import { RouteQuery } from "../types/RouteQuery";
import getColumns from "../utils/getColumns";
import getRows from "../utils/getRows";

/**
 * @interface CountriesTableValues The values to be used in the Countries table
 */
interface CountriesTableValues {
  /**
   * Columns for the Countries Table
   */
  columns: Array<ColDef>;

  /**
   * Rows for the Countries Table
   */
  rows: Array<ICountry>;

  /**
   * Error message if any error happens while fetching from API
   */
  error?: string | null | undefined;
}

/**
 * A custom React hook for building rows and columns
 * for the Countries Table
 *
 * @param query {RouteQuery} The route query with the URL
 * for filtering the rows
 *
 * @returns {CountriesTableValues} The values to be used in the Countries table
 */
const useCountriesTable = (query: RouteQuery): CountriesTableValues => {
  const { countries, error } = useSelector<RootState, CountriesState>(
    (state) => state.countries
  );

  const columns = React.useMemo(() => getColumns(), []);

  const rows = React.useMemo(
    () => getRows(countries, { q: query.q, qf: query.qf }),
    [countries, query.q, query.qf]
  );

  return { columns: columns, rows, error };
};

export default useCountriesTable;
