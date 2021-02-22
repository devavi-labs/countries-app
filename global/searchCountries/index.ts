import { useDispatch, useSelector } from "react-redux";
import { ThunkAction } from "redux-thunk";
import {
  SearchCountriesActionType,
  SearchCountriesState,
  SearchQuery,
} from "./types";
import { RootState } from "../store";
import { searchCountries } from "./actions";

export const useSearchCountries = (): [
  SearchCountriesState,
  (
    query: SearchQuery
  ) => ThunkAction<void, RootState, unknown, SearchCountriesActionType>
] => {
  const { countries, query, fetching, error } = useSelector<
    RootState,
    SearchCountriesState
  >((state) => state.searchCountries);
  const dispatch = useDispatch();

  const _searchCountries = (query: SearchQuery) =>
    dispatch(searchCountries(query));

  return [{ countries, query, fetching, error }, _searchCountries];
};
