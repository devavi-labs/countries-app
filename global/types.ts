import { HYDRATE } from "next-redux-wrapper";
import { CountriesState, SerializedCountriesState } from "./countries/types";

export type RootState = {
  countries: CountriesState;
};

export type SerializedRootState = {
  countries: SerializedCountriesState;
};

export interface HydrateAction {
  type: typeof HYDRATE;
  payload: RootState;
}
