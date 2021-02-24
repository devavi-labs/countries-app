import { RootState, SerializedRootState } from "../global/types";

/**
 * Serializes the redux state for server-side
 *
 * @param state {RootState} The un-serialized redux state
 * @returns {SerializedRootState} Returns a serialized redux state
 */
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
