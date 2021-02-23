import { useStyles } from "../styles/flag";

interface FlagProps {
  url: string;
}

const Flag: React.FC<FlagProps> = ({ url }) => {
  const classes = useStyles();

  return <img src={url} className={classes.flag} />;
};

export default Flag;
