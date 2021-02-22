import { useDispatch, useSelector } from "react-redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { getOneCountry } from "./actions";
import { GetOneCountryActionType, GetOneCountryState } from "./types";

export const useGetOneCountry = (): [
  GetOneCountryState,
  (
    alpha2Code: string
  ) => ThunkAction<void, RootState, unknown, GetOneCountryActionType>
] => {
  const state = useSelector<RootState, GetOneCountryState>(
    (state) => state.getOneCountry
  );
  const dispatch = useDispatch();

  const _getAllCountries = (alpha2Code: string) =>
    dispatch(getOneCountry(alpha2Code));

  return [state, _getAllCountries];
};
