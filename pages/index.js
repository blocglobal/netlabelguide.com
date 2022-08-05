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
          <strong>Update:</strong> Added{' '}
          <Link href="/netlabel/dr-noisem-tapes">
            <a>Dr. NoiseM Tapes</a>
          </Link>
          ,{' '}
          <Link href="/netlabel/dust-stream-records">
            <a>Dust Stream Records</a>
          </Link>
          ,{' '}
          <Link href="/netlabel/eyes-wide-open-records">
            <a>Eyes Wide Open Records</a>
          </Link>
          ,{' '}
          <Link href="/netlabel/fresscode-records">
            <a>Fresscode Records</a>
          </Link>
          ,{' '}
          <Link href="/netlabel/nuke-the-planet">
            <a>Nuke The Planet</a>
          </Link>
          ,{' '}
          <Link href="/netlabel/psychocandies">
            <a>Psychocandies</a>
          </Link>
          ,{' '}
          <Link href="/netlabel/xdd-x-static-dance-departement">
            <a>X.D.D. X-static Dance Departement</a>
          </Link>{' '}
          and{' '}
          <Link href="">
            <a>Zarkon Records</a>
          </Link>
        </p>
      </div>
      <CommunityHappenings />
      <SpotlightResources />
    </Layout>
  );
};

export default HomePage;
