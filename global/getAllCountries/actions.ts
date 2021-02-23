import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Country, CountryJSON, ICountry } from "../../models/country";
import { RootState } from "../store";
import {
  GET_ALL_COUNTRIES_REQUESTED,
  GET_ALL_COUNTRIES_FINISHED,
  GET_ALL_COUNTRIES_FAILED,
  GetAllCountriesActionType,
} from "./types";

export const getAllCountries = (): ThunkAction<
  void,
  RootState,
  unknown,
  GetAllCountriesActionType
> => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_COUNTRIES_REQUESTED });

    try {
      const res = await axios.get<Array<CountryJSON>>(
        "https://restcountries.eu/rest/v2/all"
      );

      if (res.status !== 200) {
        dispatch({
          type: GET_ALL_COUNTRIES_FAILED,
          payload: "Couldn't fetch all countries",
        });
      } else {
        const countries = res.data.map((countryJSON) =>
          Country.fromJSON(countryJSON)
        );

        dispatch({
          type: GET_ALL_COUNTRIES_FINISHED,
          payload: countries,
        });
      }
    } catch (_) {
      dispatch({
        type: GET_ALL_COUNTRIES_FAILED,
        payload: "Couldn't fetch all countries",
      });
    }
  };
};
