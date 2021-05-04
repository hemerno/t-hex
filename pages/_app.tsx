/* Types */
import { AppProps } from 'next/app'
/* Styles */
import '../styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
