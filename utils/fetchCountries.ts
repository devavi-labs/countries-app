import axios from "axios";
import { API_ENDPOINT } from "../constants";
import { Country, CountryJSON } from "../models/country";

/**
 * Fetches the countries list from API endpoint.
 *
 * @returns {Promise<Array<Country>>} Returns an array of Country object in a promise
 */
const fetchCountries = async (): Promise<Array<Country>> => {
  const { data } = await axios.get<Array<CountryJSON>>(API_ENDPOINT);
  return data.map((item) => Country.fromJSON(item)) ?? [];
};

export default fetchCountries;
