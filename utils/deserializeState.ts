import { RootState, SerializedRootState } from "../global/types";
import { Country } from "../models/country";

/**
 * Deserializes a serialized redux state for client-side
 *
 * @param state {SerializedRootState} The serialized redux state
 * @returns {RootState} Returns a deserialized redux state
 */
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
