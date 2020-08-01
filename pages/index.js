import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import PrelaunchLogo from '../components/PrelaunchLogo';
import './index.scss';

const HomePage = () => {
    return (
        <Layout className="Home">
            <Head>
                <link rel="canonical" href="https://netlabelguide.com" key="canonical" />
            </Head>
            <PrelaunchLogo />
        </Layout>
    );
}
  
export default HomePage;