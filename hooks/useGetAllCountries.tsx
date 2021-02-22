import { useDispatch, useSelector } from "react-redux";
import { ThunkAction } from "redux-thunk";
import { getAllCountries } from "../global/getAllCountries/actions";
import {
  GetAllCountriesActionType,
  GetAllCountriesState,
} from "../global/getAllCountries/types";
import { RootState } from "../global/store";

export const useGetAllCountries = (): [
  GetAllCountriesState,
  () => ThunkAction<void, RootState, unknown, GetAllCountriesActionType>
] => {
  const { countries, fetching, error } = useSelector<
    RootState,
    GetAllCountriesState
  >((state) => state.getAllCountries);
  const dispatch = useDispatch();

  const _getAllCountries = () => dispatch(getAllCountries());

  return [{ countries, fetching, error }, _getAllCountries];
};
