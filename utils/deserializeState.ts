import { RootState, SerializedRootState } from "../global/types";
import { Country } from "../models/country";

const deserializeState = (state: SerializedRootState): RootState => {
  const deserializedCountries = state.countries.countries?.map(
    (country) => new Country(country)
  );

  return {
    ...state,
    countries: {
      ...state.countries,
      countries: deserializedCountries,
    },
  };
};

export default deserializeState;
