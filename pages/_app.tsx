/** @jsxImportSource theme-ui */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import {theme} from "../theme";
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div
        sx={{
          height: '700px'
        }}>

        <Header />
        <h1
          sx={{
            color: 'primary',
            background: 'background',
            margin: '0px',
          }}>
          Hello
        </h1>
        <p
          sx={{
            color: 'text',
            background: 'background',
            margin: '0px',
          }}>
          In the theme.colors object,
          add a nested modes object that
          will contain keys for optional color modes.
        </p>
      </div>

      {/*<Component {...pageProps} />*/}
    </ThemeProvider>
  );

  // return <Component {...pageProps} />
}

export default MyApp
