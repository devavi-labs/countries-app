import qs from "querystring";
import { SortingQuery } from "../types/sortingQuery";

/**
 *  Merges the sorting query with the existing url query
 *
 * @param sortingQuery {SortingQuery} the sorting query to be merged with the existing url query
 * @param query {qs.ParsedUrlQuery} the existing url query
 *
 * @returns {string} Returns the merged query as string
 */
const mergeSortingQuery = (
  sortingQuery: SortingQuery,
  query: qs.ParsedUrlQuery
): string => {
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
