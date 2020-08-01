import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ className, children }) => {
    return (
        <Fragment>
            <Header/>
                <div className={className}>
                    {children}
                </div>
            <Footer />
        </Fragment>
    );
};

export default Layout;