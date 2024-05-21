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
      </Head>
      <div className="hero">
        <p>
          <strong>Update:</strong> Added{' '}
          <Link href="/netlabel/argali-records">Argali Records</Link>
        </p>
      </div>
      <CommunityHappenings />
      <SpotlightResources />
    </Layout>
  );
};

export default HomePage;
