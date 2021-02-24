import { Country } from "../../models/country";
import {
  CountriesErrorAction,
  CountriesLoadedAction,
  COUNTRIES_ERROR,
  COUNTRIES_LOADED,
} from "./types";

export const countriesLoaded = (
  countries: Array<Country>
): CountriesLoadedAction => {
  return {
    type: COUNTRIES_LOADED,
    payload: { countries },
  };
};

export const countriesError = (error: string): CountriesErrorAction => {
  return {
    type: COUNTRIES_ERROR,
    payload: { error },
  };
};
