import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { CountriesState } from "../global/countries/types";
import { RootState } from "../global/types";
import { Country } from "../models/country";
import { useStyles } from "../styles/searchBar";
import mergeSearchQuery from "../utils/mergeSearchQuery";
import Flag from "./Flag";

const SearchBar: React.FC = () => {
  const classes = useStyles();

  const router = useRouter();

  const { countries } = useSelector<RootState, CountriesState>(
    (state) => state.countries
  );

  const [input, setInput] = React.useState("");

  const handleAutoComplete = (
    _: React.ChangeEvent<{}>,
    value: Country | null
  ) => {
    setInput(value?.name ?? "");
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { query } = router;

    const queryString = mergeSearchQuery(input, query);

    const url = queryString ? `/?${queryString}` : "/";

    router.push(url);
  };

  return (
    <form className={classes.search} onSubmit={handleSubmit}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <Autocomplete
        id="country-select"
        options={countries}
        classes={{
          option: classes.option,
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        autoHighlight
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
      />
    </form>
  );
};

export default SearchBar;
