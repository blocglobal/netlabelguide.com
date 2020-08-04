import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
      <SpotlightResources />
      <p className="center">
        Still under development, but here’s a{' '}
        <Link href="/netlabels">
          <a>
            <strong>Netlabel list</strong>
          </a>
        </Link>{' '}
        for now. Thanks to{' '}
        <a href="https://github.com/timpulver/netlabel-list">
          <strong>Tim Pulver</strong>
        </a>{' '}
        for the data.
      </p>
    </Layout>
  );
};

export default HomePage;
