import { useDispatch, useSelector } from "react-redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { getAllCountries } from "./actions";
import { GetAllCountriesActionType, GetAllCountriesState } from "./types";

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
