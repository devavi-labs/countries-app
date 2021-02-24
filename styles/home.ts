import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles<Theme>(
  ({ breakpoints: { down }, spacing, palette: { primary, common } }) => ({
    container: {
      height: `calc(100vh - ${spacing(14)})`,
      margin: spacing(1, "auto"),
      [down("sm")]: {
        height: `calc(100vh - ${spacing(18)})`,
      },
    },
    background: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "50vh",
      backgroundColor: primary.main,
      borderBottomLeftRadius: "20%",
      borderBottomRightRadius: "20%",
    },
    table: {
      backgroundColor: common.white,
    },
  })
);

export default useStyles;
