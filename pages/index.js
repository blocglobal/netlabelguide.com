import React from 'react';
import Layout from '../components/Layout';
import PrelaunchLogo from '../components/PrelaunchLogo';
import './index.scss';

const HomePage = () => {
    return (
        <Layout className="Home">
            <PrelaunchLogo />
        </Layout>
    );
}
  
export default HomePage;