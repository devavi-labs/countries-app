import { alpha, makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing, palette }) =>
  createStyles({
    footer: {
      width: "100%",
      height: spacing(4),
      backgroundColor: palette.primary.main,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: palette.common.white,
      textAlign: "center",
    },
    link: {
      color: palette.common.white,
      textDecoration: "underline",
      textUnderlineOffset: spacing(0.5),
      fontWeight: "bold",
    },
  })
);
