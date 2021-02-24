import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles<Theme>(({ palette: { common } }) => ({
  table: {
    backgroundColor: common.white,
  },
}));

export default useStyles;
