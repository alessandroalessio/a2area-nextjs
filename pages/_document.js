
// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="it">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}