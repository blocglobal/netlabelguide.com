import React, { Fragment } from 'react';
import Head from 'next/head';
import config from '../ngconfig.js';

function injectGA() {
  return {
    __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${config.ga}');
  `,
  };
}

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>The future home of The Netlabel Guide</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta
          name="description"
          content="The Netlabel Guide’s goal will be to act as a central hub for music lovers to find great music online via great netlabels"
        />
        <link
          rel="canonical"
          href="https://netlabelguide.com"
          key="canonical"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          media="print"
          onload="this.media='all'"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${config.ga}`}
        ></script>
        <script dangerouslySetInnerHTML={injectGA()} />
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: sans-serif;
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
        }

        #__next {
          width: 100vw;
          min-height: 100vh;
        }
      `}</style>
    </Fragment>
  );
};

export default App;
