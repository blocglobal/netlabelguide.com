import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import CommunityHappenings from '../components/CommunityHappenings';
import SpotlightResources from '../components/SpotlightResources';

const HomePage = () => {
  return (
    <Layout title="The Netlabel Guide" hideTitle>
      <Head>
        <link
          rel="canonical"
          href="https://netlabelguide.com"
          key="canonical"
        />
        <script async data-id="101420417" src="/f6c1a4a7af252b842.js"></script>
      </Head>
      <div className="hero">
        <p>
          <strong>Update:</strong> Added{' '}
          <Link href="/netlabel/fischfresse">Fischfresse</Link>
        </p>
      </div>
      <CommunityHappenings />
      <SpotlightResources />
    </Layout>
  );
};

export default HomePage;
