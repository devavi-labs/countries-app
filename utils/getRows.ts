import { Country, ICountry } from "../models/country";
import { SearchQuery } from "../types/searchQuery";

const getRows = (countries: Array<Country>, { q, qf }: SearchQuery) => {
  let rows = countries?.map((country) => country.toJSON());

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
