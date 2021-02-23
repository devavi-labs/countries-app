import { alpha, makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ shadows }) =>
  createStyles({
    flag: {
      width: 33,
      height: 22.5,
      objectFit: "cover",
      boxShadow: shadows[10],
    },
  })
);
