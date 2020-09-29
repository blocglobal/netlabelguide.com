import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import CommunityHappenings from '../components/CommunityHappenings';
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
          <strong>Update:</strong> Added more resources to the{' '}
          <Link href="/resources/">
            <a>resource page</a>
          </Link>
        </p>
        <p>More updates to come.</p>
      </div>
      <CommunityHappenings />
      <SpotlightResources />
    </Layout>
  );
};

export default HomePage;
