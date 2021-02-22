import { Country } from "../../models/country";

export const SEARCH_COUNTRIES_REQUESTED = "SEARCH_COUNTRIES_REQUESTED";
export const SEARCH_COUNTRIES_FINISHED = "SEARCH_COUNTRIES_FINISHED";
export const SEARCH_COUNTRIES_FAILED = "SEARCH_COUNTRIES_FAILED";

export type SearchCriteria = "name" | "capital" | "region" | "subregion";

export type SearchQuery = {
  criteria: SearchCriteria;
  value: string;
};

export interface SearchCountriesState {
  query?: SearchQuery;
  countries: Array<Country>;
  fetching: boolean;
  error?: string | null | undefined;
}

export interface SearchCountriesRequestedAction {
  type: typeof SEARCH_COUNTRIES_REQUESTED;
  query: SearchQuery;
}

export interface SearchCountriesFinishedAction {
  type: typeof SEARCH_COUNTRIES_FINISHED;
  payload: Array<Country>;
}

export interface SearchCountriesFailedAction {
  type: typeof SEARCH_COUNTRIES_FAILED;
  payload: string;
}

export type SearchCountriesActionType =
  | SearchCountriesRequestedAction
  | SearchCountriesFinishedAction
  | SearchCountriesFailedAction;
