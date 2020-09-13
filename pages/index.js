import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
          <strong>Update:</strong> Added netlabels…{' '}
          <Link href="/netlabel/soundsphere">
            <a>Soundsphere</a>
          </Link>
          ,{' '}
          <Link href="/netlabel/secuencias-temporales">
            <a>Secuencias Temporales</a>
          </Link>
          ,{' '}
          <Link href="/netlabel/kellerloch">
            <a>Kellerloch</a>
          </Link>
          ,{' '}
          <Link href="/netlabel/micromusic">
            <a>Micromusic</a>
          </Link>{' '}
          and{' '}
          <Link href="/netlabel/still-heat-recordings">
            <a>Still Heat Recordings</a>
          </Link>
          . Changed activity status of
          <Link href="/netlabel/happy-puppy-records">
            <a>Happy Puppy Records</a>
          </Link>{' '}
          and{' '}
          <Link href="/netlabel/subterranean-tide">
            <a>Subterranean Tide</a>
          </Link>
          .
        </p>
        <p>More updates to come.</p>
      </div>
      <SpotlightResources />
    </Layout>
  );
};

export default HomePage;
