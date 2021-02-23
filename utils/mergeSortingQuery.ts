import qs from "querystring";
import { SortingQuery } from "../types/sortingQuery";

const mergeSortingQuery = (
  sortingQuery: SortingQuery,
  query: qs.ParsedUrlQuery
) => {
  const { sort_rows, sorting } = sortingQuery;

  if (sort_rows && sorting) {
    query.sort_rows = sort_rows;
    query.sorting = sorting;
  } else {
    delete query.sort_rows;
    delete query.sorting;
  }

  return qs.stringify(query);
};

export default mergeSortingQuery;
