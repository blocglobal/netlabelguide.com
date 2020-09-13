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
          <strong>Update:</strong> Added netlabels… Soundsphere, Secuencias
          Temporales, Kellerloch, Micromusic and Still Heat Recordings. Changed
          activity status of Happy Puppy Records and Subterranean Tide.
        </p>
        <p>More updates to come.</p>
      </div>
      <SpotlightResources />
    </Layout>
  );
};

export default HomePage;
