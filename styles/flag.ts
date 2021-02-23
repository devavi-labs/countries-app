import { alpha, makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ palette: { common } }) =>
  createStyles({
    flag: {
      width: 33,
      height: 22.5,
      objectFit: "cover",
      boxShadow: `0 0 8px 2px ${alpha(common.black, 0.3)}`,
    },
  })
);
