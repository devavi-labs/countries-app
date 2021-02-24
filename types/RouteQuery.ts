import { SearchQuery } from "./searchQuery";
import { SortingQuery } from "./sortingQuery";

/**
 * @type {RouteQuery} The combined route query type
 */
export type RouteQuery = SearchQuery & SortingQuery;
