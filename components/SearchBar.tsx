import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { CountriesState } from "../global/countries/types";
import { RootState } from "../global/types";
import { Country } from "../models/country";
import { useStyles } from "../styles/searchBar";
import { RouteQuery } from "../types/RouteQuery";
import mergeSearchQuery from "../utils/mergeSearchQuery";
import Flag from "./Flag";

const SearchBar: React.FC = () => {
  const classes = useStyles();

  const router = useRouter();

  /**
   * Combined route queries containing both sorting queries and search query
   */
  const query = useMemo(() => (router.query as unknown) as RouteQuery, [
    router.query,
  ]);

  const { countries } = useSelector<RootState, CountriesState>(
    (state) => state.countries
  );

  const [input, setInput] = React.useState((query.q as string) ?? "");

  /**
   * Sets the input to the value the user selects
   * from the auto complete options
   *
   * @param _ The change event
   * @param value The value the user selects
   * from the auto complete options
   */
  const handleAutoComplete = (
    _: React.ChangeEvent<{}>,
    value: Country | null
  ) => {
    setInput(value?.name ?? "");
  };

  /**
   * Sets the input to the value the user types in
   * in the search bar
   *
   * @param event The change event which contains the input value
   */
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput(event.target.value);
  };

  /**
   * Merges the input from user to the existing route queries
   * and changes the route with appropriate search query
   *
   * @param event The form submit event
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const queryString = mergeSearchQuery(input, query);

    const url = queryString ? `/?${queryString}` : "/";

    router.push(url, undefined, { shallow: true });
  };

  return (
    <form className={classes.search} onSubmit={handleSubmit}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <Autocomplete
        id="country-select"
        options={countries}
        inputValue={input}
        classes={{
          option: classes.option,
          root: classes.inputRoot,
          input: classes.inputInput,
          paper: classes.popper,
        }}
        getOptionLabel={(option) => option.name}
        renderOption={(option) => (
          <React.Fragment>
            <Flag url={option.flag} />
            <span>{option.name}</span>
          </React.Fragment>
        )}
        renderInput={(params) => {
          return (
            <InputBase
              {...params}
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              fullWidth
              onChange={handleChange}
              placeholder="Search any country"
            />
          );
        }}
        onChange={handleAutoComplete}
        noOptionsText="No countries"
      />
    </form>
  );
};

export default SearchBar;
