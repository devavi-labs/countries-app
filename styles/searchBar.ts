import {
  alpha,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      paddingRight: theme.spacing(6),
      width: "100%",
      color: theme.palette.common.white,

      [theme.breakpoints.up("sm")]: {
        width: "40ch",
      },
    },
    popper: {
      boxShadow: theme.shadows[24],
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
      color: theme.palette.common.white,
    },
    searchButton: {
      position: "absolute",
      right: 0,
      top: 0,
      height: "100%",
      width: theme.spacing(6),
      color: theme.palette.common.white,
      opacity: 1,
      pointerEvents: "all",
      transition: theme.transitions.create(["opacity", "pointer"], {
        duration: 200,
        easing: "ease-in",
      }),
    },
    hidden: {
      opacity: 0,
      pointerEvents: "none",
    },
    option: {
      "& > span": {
        marginLeft: 10,
      },
    },
  })
);
