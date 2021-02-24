import { Country, ICountry } from "../models/country";
import { SearchQuery } from "../types/searchQuery";

/**
 * Prepares, and filters if search query provided, the rows for the countries table
 *
 * @param countries {Array<Country>} The list of countries
 * @param query {SearchQuery} The search query for filtering
 *
 * @returns {Array<ICountry>} Returns the list of countries as rows
 */
const getRows = (countries: Array<Country>, query: SearchQuery) => {
  let rows = countries?.map((country) => country.toJSON());
  const { q, qf } = query;

  if (q && qf) {
    rows = rows.filter((country) => {
      if (qf in country) {
        return country[qf as keyof ICountry]
          .toString()
          .toLowerCase()
          .includes(q.toLowerCase());
      }
    });
  }

  return rows;
};

export default getRows;
