import {createGlobalStyle, DefaultTheme, ThemeProvider} from 'styled-components'
import {wrapper} from "../redux/store";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100vh;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  button {
    cursor: pointer;
    font: inherit;
  }

  input {
    font: inherit;
  }

  h1, h3, h4, h5, h6 {
    margin: 0;
  }
`

const theme: DefaultTheme = {
    colors: {
        blue: '#2b3172',
        purple: '#371548',
        black: '#000',
        yellow: '#fdd207'
    },
}

function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default wrapper.withRedux(App)