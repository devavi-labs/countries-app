import { Country } from "../models/country";

const getAlpha2Code = (fullName: string, countries: Array<Country>) => {
  return countries.find((country) => country.name === fullName)?.alpha2Code;
};

export default getAlpha2Code;
