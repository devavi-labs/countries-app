import { SearchQuery } from "../types/searchQuery";

const searchQueryToQueryString = ({ q, qf }: SearchQuery) => {
  if (q && qf) {
    return `q=${q}&qf=${qf}`;
  } else {
    return null;
  }
};

export default searchQueryToQueryString;
