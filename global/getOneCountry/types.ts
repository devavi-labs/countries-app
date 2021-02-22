import { Country } from "../../models/country";

export const GET_ONE_COUNTRY_REQUESTED = "GET_ONE_COUNTRY_REQUESTED";
export const GET_ONE_COUNTRY_FINISHED = "GET_ONE_COUNTRY_FINISHED";
export const GET_ONE_COUNTRY_FAILED = "GET_ONE_COUNTRY_FAILED";

export interface GetOneCountryState {
  country?: Country | null | undefined;
  fetching: boolean;
  error?: string | null | undefined;
}

export interface GetOneCountryRequestedAction {
  type: typeof GET_ONE_COUNTRY_REQUESTED;
  alpha2Code: string;
}

export interface GetOneCountryFinishedAction {
  type: typeof GET_ONE_COUNTRY_FINISHED;
  payload: Country;
}

export interface GetOneCountryFailedAction {
  type: typeof GET_ONE_COUNTRY_FAILED;
  payload: string;
}

export type GetOneCountryActionType =
  | GetOneCountryRequestedAction
  | GetOneCountryFinishedAction
  | GetOneCountryFailedAction;
