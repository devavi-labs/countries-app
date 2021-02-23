import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles<Theme>(({ breakpoints: { width } }) => ({
  toolbar: {
    width: "100%",
    maxWidth: width("lg"),
    margin: "0 auto",
  },
  title: {
    fontWeight: "bold",
  },
  container: {
    height: "calc(100vh - 80px)",
  },
}));

export default useStyles;
