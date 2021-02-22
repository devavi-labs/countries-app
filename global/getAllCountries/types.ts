import { Country } from "../../models/country";

export const GET_ALL_COUNTRIES_REQUESTED = "GET_ALL_COUNTRIES_REQUESTED";
export const GET_ALL_COUNTRIES_FINISHED = "GET_ALL_COUNTRIES_FINISHED";
export const GET_ALL_COUNTRIES_FAILED = "GET_ALL_COUNTRIES_FAILED";

export interface GetAllCountriesState {
  countries: Array<Country>;
  fetching: boolean;
  error?: string | null | undefined;
}

export interface GetAllCountriesRequestedAction {
  type: typeof GET_ALL_COUNTRIES_REQUESTED;
}

export interface GetAllCountriesFinishedAction {
  type: typeof GET_ALL_COUNTRIES_FINISHED;
  payload: Array<Country>;
}

export interface GetAllCountriesFailedAction {
  type: typeof GET_ALL_COUNTRIES_FAILED;
  payload: string;
}

export type GetAllCountriesActionType =
  | GetAllCountriesRequestedAction
  | GetAllCountriesFinishedAction
  | GetAllCountriesFailedAction;
