import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles<Theme>(
  ({ breakpoints: { width, down }, spacing, palette: { common } }) => ({
    toolbar: {
      width: "100%",
      maxWidth: width("lg"),
      margin: "0 auto",
      height: spacing(6),
      [down("sm")]: {
        flexDirection: "column",
        height: spacing(12),
      },
    },
    title: {
      color: common.white,
      flexGrow: 1,
      fontWeight: "bold",
      [down("sm")]: {
        flexGrow: 0,
        margin: spacing(1),
      },
    },
  })
);

export default useStyles;
