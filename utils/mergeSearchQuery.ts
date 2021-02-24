import qs from "querystring";

/**
 *  Merges the search input with the existing url query
 *
 * @param input {string} the input value to be merged with the existing url query
 * @param query {qs.ParsedUrlQuery} the existing url query
 *
 * @returns {string} Returns the merged query as string
 */
const mergeSearchQuery = (input: string, query: qs.ParsedUrlQuery): string => {
  if (input) {
    query.q = input;
    query.qf = "name";
  } else {
    delete query.q;
    delete query.qf;
  }

  return qs.stringify(query);
};

export default mergeSearchQuery;
