import { Country } from "../models/country";

const getRows = (countries: Array<Country>) => {
  return countries?.map((country) => country.toJSON());
};

export default getRows;
