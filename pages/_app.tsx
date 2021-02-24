import CssBaseline from "@material-ui/core/CssBaseline";
import { AppProps } from "next/app";
import React from "react";
import "../styles/globals.css";
import { wrapper } from "../global/store";

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default wrapper.withRedux(App);
