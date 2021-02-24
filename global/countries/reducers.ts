import { HYDRATE } from "next-redux-wrapper";
import {
  CountriesActionType,
  CountriesState,
  COUNTRIES_ERROR,
  COUNTRIES_LOADED,
} from "./types";

const initialState: CountriesState = {
  countries: [],
};

export const countriesReducer = (
  state = initialState,
  action: CountriesActionType
): CountriesState => {
  switch (action.type) {
    case HYDRATE:
      const nextState = { ...state, ...action.payload.countries };

      if (state.countries.length > 0) nextState.countries = state.countries;

      return nextState;

    case COUNTRIES_LOADED:
      return {
        countries: action.payload.countries ?? [],
        error: null,
      };

    case COUNTRIES_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
