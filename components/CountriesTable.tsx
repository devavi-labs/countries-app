import {
  DataGrid,
  PageChangeParams,
  SortModelParams,
} from "@material-ui/data-grid";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import useCountriesTable from "../hooks/useCountriesTable";
import useStyles from "../styles/countriesTable";
import { RouteQuery } from "../types/RouteQuery";
import mergeSortingQuery from "../utils/mergeSortingQuery";
import sortModelToSortQuery from "../utils/sortModelToSortQuery";
import sortQueryToSortModel from "../utils/sortQueryToSortModel";

const CountriesTable = () => {
  const classes = useStyles();
  const router = useRouter();

  /**
   * Combined route queries containing both sorting queries and search query
   */
  const query = useMemo(() => (router.query as unknown) as RouteQuery, [
    router.query,
  ]);

  const { columns, rows, error } = useCountriesTable(query);

  /**
   * The sort model created from sorting query
   * which will be passed in the DataGrid component
   * to sort the rows
   */
  const sortModel = useMemo(() => sortQueryToSortModel(query), [query]);

  const [currentPage, setCurrentPage] = useState(0);

  /**
   * Changes the current page number when the user changes
   * the page in the table
   * @param params {PageChangeParams} The params which contains the page number
   */
  const handlePageChange = (params: PageChangeParams) => {
    if (params.page !== currentPage) setCurrentPage(params.page);
  };

  useEffect(() => {
    /**
     * This sets the current page to 0
     * every time the page is reloaded
     * or the user searches for a country and the rows change
     */
    if (currentPage !== 0) {
      setCurrentPage(0);
    }
  }, [rows]);

  /**
   * Creates the sorting query from the sort model passed in
   * and then changes the route with appropriate url query
   *
   * @param params {SortModelParams} The params which contain the sort model
   */
  const handleSortModelChange = (params: SortModelParams) => {
    if (params.sortModel !== sortModel) {
      const sortingQuery = sortModelToSortQuery(params.sortModel);

      const queryString = mergeSortingQuery(sortingQuery, router.query);

      const url = queryString ? `/?${queryString}` : "/";

      router.push(url, undefined, { shallow: true });
    }
  };

  return (
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
      page={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

export default CountriesTable;
