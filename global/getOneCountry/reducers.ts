import {
  GetOneCountryActionType,
  GetOneCountryState,
  GET_ONE_COUNTRY_FAILED,
  GET_ONE_COUNTRY_FINISHED,
  GET_ONE_COUNTRY_REQUESTED,
} from "./types";

const initialState: GetOneCountryState = {
  country: null,
  fetching: false,
};

export const getOneCountryReducer = (
  state = initialState,
  action: GetOneCountryActionType
): GetOneCountryState => {
  switch (action.type) {
    case GET_ONE_COUNTRY_REQUESTED:
      return {
        ...state,
        fetching: true,
      };
    case GET_ONE_COUNTRY_FINISHED:
      return {
        country: action.payload,
        fetching: false,
        error: null,
      };
    case GET_ONE_COUNTRY_FAILED:
      return {
        country: null,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
