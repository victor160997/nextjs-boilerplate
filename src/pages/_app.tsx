import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link
          rel="shortcut icon"
          href="data:image/png;base64,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"
        />
        <link
          rel="apple-touch-icon"
          href="data:image/png;base64,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"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work typescript, react and NextJs"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App