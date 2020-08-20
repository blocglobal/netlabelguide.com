import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import SpotlightResources from '../components/SpotlightResources';
import './index.scss';

const HomePage = () => {
  return (
    <Layout className="Home" title="The Netlabel Guide" hideTitle>
      <Head>
        <link
          rel="canonical"
          href="https://netlabelguide.com"
          key="canonical"
        />
      </Head>
      <div className="hero">
        <p>
          <strong>Update:</strong> We’ve begun adding recent release lists for
          netlabels that have release focused RSS feeds. For labels that are
          archived on Internet Archive, the feeds provided by that platform will
          be used for these lists. We’re about halfway through the netlabel list
          adding those archive.org feeds.
        </p>
        <p>More updates to come.</p>
      </div>
      <SpotlightResources />
    </Layout>
  );
};

export default HomePage;
