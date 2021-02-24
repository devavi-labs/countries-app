import axios from "axios";
import { API_ENDPOINT } from "../constants";
import { Country, CountryJSON } from "../models/country";

const fetchCountries = async (): Promise<Array<Country>> => {
  const { data } = await axios.get<Array<CountryJSON>>(API_ENDPOINT);
  return data.map((item) => Country.fromJSON(item)) ?? [];
};

export default fetchCountries;
