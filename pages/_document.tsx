import { FC } from 'react'
import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'

export const MyDocument: FC<DocumentProps> = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
