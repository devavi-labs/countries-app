import { alpha, makeStyles } from "@material-ui/core/styles";

interface FlagProps {
  url: string;
}

const Flag: React.FC<FlagProps> = ({ url }) => {
  const useStyles = makeStyles(({ palette: { common } }) => ({
    flag: {
      width: 33,
      height: 22.5,
      objectFit: "cover",
      boxShadow: `0 0 8px 2px ${alpha(common.black, 0.3)}`,
    },
  }));
  const classes = useStyles();
  return <img src={url} className={classes.flag} />;
};

export default Flag;
