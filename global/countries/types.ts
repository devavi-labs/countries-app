import { Country, ICountry } from "../../models/country";
import { HydrateAction } from "../types";

export const COUNTRIES_LOADED = "COUNTRIES_LOADED";
export const COUNTRIES_ERROR = "COUNTRIES_ERROR";

export interface CountriesState {
  countries: Array<Country>;
  error?: string | null | undefined;
}

export interface SerializedCountriesState {
  countries: Array<ICountry>;
  error?: string | null | undefined;
}

export type CountriesActionPayload = {
  countries?: Array<Country>;
  error?: string;
};

export interface CountriesLoadedAction {
  type: typeof COUNTRIES_LOADED;
  payload: CountriesActionPayload;
}

export interface CountriesErrorAction {
  type: typeof COUNTRIES_ERROR;
  payload: CountriesActionPayload;
}

export type CountriesActionType =
  | HydrateAction
  | CountriesLoadedAction
  | CountriesErrorAction;
