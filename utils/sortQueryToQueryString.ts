import { SortingQuery } from "../types/sortingQuery";

const sortQueryToQueryString = (query: SortingQuery) => {
  if (query.sorting && query.sort_rows) {
    return `?sort_rows=${query.sort_rows}&sorting=${query.sorting}`;
  } else {
    return null;
  }
};

export default sortQueryToQueryString;
