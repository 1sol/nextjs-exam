import { ThemeProvider } from 'styled-components';
import type { AppProps } from "next/app";
import theme from '../utils/theme';
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
			{/* <GlobalStyle /> */}
			<main>
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
  );
}

export default MyApp;
