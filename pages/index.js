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
        <h2>Welcome to The Netlabel Guide</h2>
        <p className="left">
          Discover the vibrant world of netlabels, where independent music
          thrives and creativity knows no bounds. Whether you’re a passionate
          listener, an emerging artist, a curious creator, or a longtime
          community participant, <strong>The Netlabel Guide</strong> is your
          ultimate resource to explore, connect, and grow in this dynamic
          community.
        </p>
        <p className="left">
          Start exploring today—because the future of music is collaborative,
          innovative, and independent.
        </p>
        <hr />
        <p>
          <strong>Update:</strong> Added{' '}
          <Link href="/netlabel/jumpsuit-records">Jumpsuit Records</Link>
        </p>
      </div>
      <CommunityHappenings />
      <SpotlightResources />
    </Layout>
  );
};

export default HomePage;
