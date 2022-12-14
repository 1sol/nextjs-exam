import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import theme from "../utils/theme";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <main id="root">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
