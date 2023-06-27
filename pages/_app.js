import React, { Fragment } from 'react';
import Head from 'next/head';
import config from '../ngconfig.js';
import './_app.scss';
import '../components/CommunityHappenings.scss';
import '../components/Footer.scss';
import '../components/HappeningList.scss';
import '../components/Header.scss';
import '../components/HeaderInner.scss';
import '../components/HorizontalLogo.scss';
import '../components/IconLink.scss';
import '../components/Layout.scss';
import '../components/Logo.scss';
import '../components/Nav.scss';
import '../components/ResourceList.scss';
import '../components/SpotlightResources.scss';
import '../components/Breadcrumbs.scss';
import '../components/CharacterList.scss';
import '../components/NetlabelFilter.scss';
import '../components/NetlabelList.scss';
import '../components/CountryList.scss';
import '../components/GenreList.scss';
import '../components/NetlabelHeading.scss';
import '../components/ReleaseList.scss';
import '../components/Urls.scss';
import '../components/ArchivedNetlabels.scss';
import './index.scss';

function injectGA() {
  return {
    __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${config.ga}');
  `,
  };
}

const App = ({ Component, pageProps }) => {
  const description =
    'The Netlabel Guide helps music lovers find great music & educates them on how important it is to download/purchase music directly from artists and labels.';
  return (
    <Fragment>
      <Head>
        <title>The Netlabel Guide</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="description" content={description} />
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
          onLoad="this.media='all'"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          property="og:url"
          content="https://netlabelguide.com"
          key="og-url"
        />
        <meta property="og:type" content="website" key="og-type" />
        <meta property="og:title" content="The Netlabel Guide" key="og-title" />
        <meta
          property="og:description"
          content={description}
          key="og-description"
        />
        <meta
          property="og:image"
          content="https://netlabelguide.com/img/netlabelguide.png"
          key="og-image"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${config.ga}`}
        ></script>
        <script dangerouslySetInnerHTML={injectGA()} />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
