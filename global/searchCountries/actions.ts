import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Country, ICountry } from "../../models/country";
import { RootState } from "../store";
import {
  SEARCH_COUNTRIES_REQUESTED,
  SEARCH_COUNTRIES_FINISHED,
  SEARCH_COUNTRIES_FAILED,
  SearchCountriesActionType,
  SearchQuery,
} from "./types";

export const searchCountries = (
  query: SearchQuery
): ThunkAction<void, RootState, unknown, SearchCountriesActionType> => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_COUNTRIES_REQUESTED, query });

    try {
      const res = await axios.get<Array<ICountry>>(
        `https://restcountries.eu/rest/v2/${query.criteria}/${query.value}`
      );

      if (res.status !== 200) {
        dispatch({
          type: SEARCH_COUNTRIES_FAILED,
          payload: "Couldn't fetch countries",
        });
      } else {
        const countries = res.data.map((countryJSON) =>
          Country.fromJSON(countryJSON)
        );

        dispatch({
          type: SEARCH_COUNTRIES_FINISHED,
          payload: countries,
        });
      }
    } catch (_) {
      dispatch({
        type: SEARCH_COUNTRIES_FAILED,
        payload: "Couldn't fetch countries",
      });
    }
  };
};
