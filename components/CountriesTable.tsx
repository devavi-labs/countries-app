import { DataGrid, SortModelParams } from "@material-ui/data-grid";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import useCountriesTable from "../hooks/useCountriesTable";
import useStyles from "../styles/countriesTable";
import { RouteQuery } from "../types/RouteQuery";
import mergeSortingQuery from "../utils/mergeSortingQuery";
import sortModelToSortQuery from "../utils/sortModelToSortQuery";
import sortQueryToSortModel from "../utils/sortQueryToSortModel";

const CountriesTable = () => {
  const classes = useStyles();
  const router = useRouter();

  const query = useMemo(() => (router.query as unknown) as RouteQuery, [
    router.query,
  ]);

  const { columns, rows, error } = useCountriesTable(query);

  const sortModel = useMemo(() => sortQueryToSortModel(query), [query]);

  const handleSortModelChange = (params: SortModelParams) => {
    if (params.sortModel !== sortModel) {
      const sortingQuery = sortModelToSortQuery(params.sortModel);

      const queryString = mergeSortingQuery(sortingQuery, router.query);

      const url = queryString ? `/?${queryString}` : "/";

      router.push(url);
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
    />
  );
};

export default CountriesTable;
