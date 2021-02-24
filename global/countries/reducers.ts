import { HYDRATE } from "next-redux-wrapper";
import {
  CountriesActionType,
  CountriesState,
  COUNTRIES_ERROR,
  COUNTRIES_LOADED,
} from "./types";

/**
 * The initial State for Countries reducer
 */
const initialState: CountriesState = {
  countries: [],
};

/**
 *
 * @param state {CountriesState} The initial state provided to countries reducer
 * @param action {CountriesActionType} The actions this reducer will react to
 *
 * @returns {CountriesState} Returns the countries state
 */
export const countriesReducer = (
  state: CountriesState = initialState,
  action: CountriesActionType
): CountriesState => {
  switch (action.type) {
    /** When hydrate action is dispatched by next-redux-wrapper */
    case HYDRATE:
      const nextState = { ...state, ...action.payload.countries };

      if (state.countries.length > 0) nextState.countries = state.countries;

      return nextState;

    /** When countries are succesfully fetched */
    case COUNTRIES_LOADED:
      return {
        countries: action.payload.countries ?? [],
        error: null,
      };

    /** When countries are failed to be fetched */
    case COUNTRIES_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };

    /**
     * When an action other than the defined actions is dispatched,
     * the current state is returns
     */
    default:
      return state;
  }
};
