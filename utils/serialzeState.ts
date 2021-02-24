import { RootState, SerializedRootState } from "../global/types";

const serializeState = (state: RootState): SerializedRootState => {
  const serializedCountries = state.countries.countries?.map((country) =>
    country.toJSON()
  );

  return {
    ...state,
    countries: {
      ...state.countries,
      countries: serializedCountries,
    },
  };
};

export default serializeState;
