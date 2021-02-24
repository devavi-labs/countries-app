import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import useStyles from "../styles/header";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title, children }) => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" component="span" className={classes.title}>
          {title}
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
