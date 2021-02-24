import { useStyles } from "../styles/flag";

/**
 * @interface FlagProps The prop types for Flag component
 */
interface FlagProps {
  /**
   * The url of the flag of a country
   */
  url: string;
}

const Flag: React.FC<FlagProps> = ({ url }) => {
  const classes = useStyles();

  return <img src={url} className={classes.flag} />;
};

export default Flag;
