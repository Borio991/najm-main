import '../styles/globals.css'
import SizeObserver from '../utils/size-observer'
import { LangProvider } from '../utils/store'

function MyApp({ Component, pageProps }) {
  return (
    <LangProvider>
      <SizeObserver>
        <Component {...pageProps} />
      </SizeObserver>
    </LangProvider>
  )
}

export default MyApp
