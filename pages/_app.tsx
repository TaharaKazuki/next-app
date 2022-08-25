import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faBorderAll, faList } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add(faList, faBorderAll)

import '@fortawesome/fontawesome-svg-core/styles.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/index.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
