import qs from "querystring";

const mergeSearchQuery = (input: string, query: qs.ParsedUrlQuery) => {
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
