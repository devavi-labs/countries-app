import CssBaseline from "@material-ui/core/CssBaseline";
import { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { useStore } from "../global/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <CssBaseline />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
