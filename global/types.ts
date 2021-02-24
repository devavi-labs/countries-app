import { HYDRATE } from "next-redux-wrapper";
import { CountriesState, SerializedCountriesState } from "./countries/types";

/**
 * @typedef RootState The root redux state type
 */
export type RootState = {
  /** The countries state */
  countries: CountriesState;
};

/**
 * @typedef SerializedRootState The serialized root state type
 */
export type SerializedRootState = {
  /** The countries state with serialized country objects */
  countries: SerializedCountriesState;
};

/**
 * @interface HydrateAction The Hydrate action dispatched by next-redux-wrapper
 */
export interface HydrateAction {
  /** The action type for Hydrate Action imported from next-redux-wrapper */
  type: typeof HYDRATE;

  /** Hydrate action's payload is the current redux root state */
  payload: RootState;
}
