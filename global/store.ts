import { createWrapper, MakeStore } from "next-redux-wrapper";
import { combineReducers, createStore, Store } from "redux";
import deserializeState from "../utils/deserializeState";
import serializeState from "../utils/serializeState";
import { countriesReducer } from "./countries/reducers";
import { RootState } from "./types";

/** The combined reducers */
const rootReducer = combineReducers({
  countries: countriesReducer,
});

/**
 * Creates a MakeStore function to be called within next-redux-wrapper
 *
 * @returns {Store<RootState} Returns a redux store
 */
const makeStore: MakeStore<RootState> = (): Store<RootState> =>
  createStore(rootReducer);

/** The redux wrapper to be used to wrap the _app component with */
export const wrapper = createWrapper<RootState>(makeStore, {
  serializeState,
  deserializeState,
});
