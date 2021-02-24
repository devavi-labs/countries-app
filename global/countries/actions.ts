import { Country } from "../../models/country";
import {
  CountriesErrorAction,
  CountriesLoadedAction,
  COUNTRIES_ERROR,
  COUNTRIES_LOADED,
} from "./types";

/**
 * The action dispatched when the countries are fetched from API
 *
 * @param countries The list of countries fetched from API
 *
 * @returns {CountriesLoadedAction} Returns the CountriesLoadedAction
 */
export const countriesLoaded = (
  countries: Array<Country>
): CountriesLoadedAction => {
  return {
    type: COUNTRIES_LOADED,
    payload: { countries },
  };
};

/**
 * The action dispatched when the countries are failed to be fetched from API
 *
 * @param error The error occured while fetching from API
 *
 * @returns {CountriesErrorAction} Returns the CountriesErrorAction
 */
export const countriesError = (error: string): CountriesErrorAction => {
  return {
    type: COUNTRIES_ERROR,
    payload: { error },
  };
};
