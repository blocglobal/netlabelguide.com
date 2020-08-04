import React from 'react';
import Header from './Header';
import HeaderInner from './HeaderInner';
import Nav from './Nav';
import Footer from './Footer';
import './Layout.scss';

const Layout = ({
  title,
  hideTitle,
  header = 'default',
  className,
  children,
}) => {
  return (
    <div className={className}>
      {header === 'default' ? (
        <Header title={title} hideTitle={hideTitle} />
      ) : (
        <HeaderInner />
      )}
      <Nav />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
