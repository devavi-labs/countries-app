import { combineReducers, createStore } from "redux";
import { countriesReducer } from "./countries/reducers";
import { MakeStore, createWrapper } from "next-redux-wrapper";
import { RootState } from "./types";
import serializeState from "../utils/serialzeState";
import deserializeState from "../utils/deserializeState";

const rootReducer = combineReducers({
  countries: countriesReducer,
});

const makeStore: MakeStore<RootState> = () => createStore(rootReducer);

export const wrapper = createWrapper<RootState>(makeStore, {
  serializeState,
  deserializeState,
});
