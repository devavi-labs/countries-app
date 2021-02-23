import InputBase from "@material-ui/core/InputBase";
import {
  alpha,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useRouter } from "next/router";
import React from "react";
import { useGetAllCountries } from "../global/getAllCountries";
import { Country } from "../models/country";
import mergeSearchQuery from "../utils/mergeSearchQuery";
import Flag from "./Flag";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: "100%",

      [theme.breakpoints.up("sm")]: {
        width: "40ch",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    option: {
      "& > span": {
        marginLeft: 10,
      },
    },
  })
);

const SearchBar: React.FC = () => {
  const classes = useStyles();

  const router = useRouter();

  const [{ countries }] = useGetAllCountries();

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
