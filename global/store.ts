import { useMemo } from "react";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import { getAllCountriesReducer } from "./getAllCountries/reducers";
import { GetAllCountriesState } from "./getAllCountries/types";

export type RootState = {
  getAllCountries: GetAllCountriesState;
};

const rootReducer = combineReducers({
  getAllCountries: getAllCountriesReducer,
});

let store: Store<RootState> | undefined;

function initStore(initialState: RootState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  );
}

export const initializeStore = (preloadedState: RootState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: RootState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
