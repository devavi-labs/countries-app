import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles<Theme>(
  ({ breakpoints: { width, up }, spacing }) => ({
    toolbar: {
      width: "100%",
      maxWidth: width("lg"),
      margin: "0 auto",
      height: spacing(6),
    },
    title: {
      flexGrow: 1,
      display: "none",
      [up("sm")]: {
        display: "block",
        fontWeight: "bold",
      },
    },
    container: {
      height: `calc(100vh - ${spacing(10)})`,
      margin: spacing(1, "auto"),
    },
  })
);

export default useStyles;
