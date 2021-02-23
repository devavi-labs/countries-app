import { makeStyles } from "@material-ui/core/styles";

interface FlagProps {
  url: string;
}

const Flag: React.FC<FlagProps> = ({ url }) => {
  const useStyles = makeStyles(() => ({
    flag: {
      backgroundImage: `url(${url})`,
      width: 40,
      height: 30,
      objectFit: "cover",
    },
  }));
  const classes = useStyles();
  return <img src={url} className={classes.flag} />;
};

export default Flag;
