import { Country, ICountry } from "../../models/country";
import { HydrateAction } from "../types";

export const COUNTRIES_LOADED = "COUNTRIES_LOADED";
export const COUNTRIES_ERROR = "COUNTRIES_ERROR";

/**
 * @interface CountriesState Interface for the state of countries
 */
export interface CountriesState {
  /** List of countries fetched from remote API */
  countries: Array<Country>;

  /** Error message if any error happens while fetching from API */
  error?: string | null | undefined;
}

/**
 * @interface SerializedCountriesState Interface for the state of serialized country objects
 */
export interface SerializedCountriesState {
  /** List of serialized countries fetched from remote API */
  countries: Array<ICountry>;

  /** Error message if any error happens while fetching from API */
  error?: string | null | undefined;
}

/**
 * @typedef CountriesActionPayload Payload type for CountriesAction
 */
export type CountriesActionPayload = {
  /** List of serialized countries fetched from remote API */
  countries?: Array<Country>;

  /** Error message if any error happens while fetching from API */
  error?: string;
};

/**
 * @interface CountriesLoadedAction Countries action interface when countries are loaded
 */
export interface CountriesLoadedAction {
  /** The action type for this action */
  type: typeof COUNTRIES_LOADED;

  /** Payload of this action */
  payload: CountriesActionPayload;
}

/**
 * @interface CountriesErrorAction Countries action interface when countries are failed to be loaded
 */
export interface CountriesErrorAction {
  /** The action type for this action */
  type: typeof COUNTRIES_ERROR;

  /** Payload of this action */
  payload: CountriesActionPayload;
}

/**
 * @typedef CountriesActionType The combined type for Countries actions
 */
export type CountriesActionType =
  | HydrateAction
  | CountriesLoadedAction
  | CountriesErrorAction;
