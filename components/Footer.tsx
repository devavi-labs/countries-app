import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React from "react";
import { useStyles } from "../styles/footer";

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="subtitle2" component="span" className={classes.text}>
        Created by{" "}
        <Link href="https://github.com/devavi-labs" className={classes.link}>
          devavi
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;
