import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import SpotlightResources from '../components/SpotlightResources';
import './index.scss';

const HomePage = () => {
  return (
    <Layout
      className="Home"
      title="The future home of The Netlabel Guide"
      hideTitle
    >
      <Head>
        <link
          rel="canonical"
          href="https://netlabelguide.com"
          key="canonical"
        />
      </Head>
      <div className="hero">
        The site is still currently under development, keep checking back for
        the latest updates.
      </div>
      <SpotlightResources />
    </Layout>
  );
};

export default HomePage;
