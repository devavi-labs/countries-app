import axios from "axios";
import { ThunkAction } from "redux-thunk";
import {
  ExtendedCountry,
  IExtendedCountry,
} from "../../models/extendedCountry";
import { RootState } from "../store";
import {
  GetOneCountryActionType,
  GET_ONE_COUNTRY_FAILED,
  GET_ONE_COUNTRY_FINISHED,
  GET_ONE_COUNTRY_REQUESTED,
} from "./types";

export const getOneCountry = (
  alpha2Code: string
): ThunkAction<void, RootState, unknown, GetOneCountryActionType> => {
  return async (dispatch) => {
    dispatch({ type: GET_ONE_COUNTRY_REQUESTED, alpha2Code });

    try {
      const res = await axios.get<IExtendedCountry>(
        `https://restcountries.eu/rest/v2/alpha/${alpha2Code}`
      );

      if (res.status !== 200) {
        dispatch({
          type: GET_ONE_COUNTRY_FAILED,
          payload: "Couldn't fetch the country",
        });
      } else {
        const country = ExtendedCountry.fromJSON(res.data);

        dispatch({
          type: GET_ONE_COUNTRY_FINISHED,
          payload: country,
        });
      }
    } catch (_) {
      dispatch({
        type: GET_ONE_COUNTRY_FAILED,
        payload: "Couldn't fetch the country",
      });
    }
  };
};
