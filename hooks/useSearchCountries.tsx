import { useDispatch, useSelector } from "react-redux";
import { ThunkAction } from "redux-thunk";
import { searchCountries } from "../global/searchCountries/actions";
import {
  SearchCountriesActionType,
  SearchCountriesState,
  SearchQuery,
} from "../global/searchCountries/types";
import { RootState } from "../global/store";

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
