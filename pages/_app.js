import React, { Fragment } from 'react';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
    return (
        <Fragment>
            <Head>
                <title>The future home of The Netlabel Guide</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <meta 
                    name="description" 
                    content="The Netlabel Guide’s goal will be to act as a central hub for music lovers to find great music online via great netlabels"
                />
                <link rel="canonical" href="https://netlabelguide.com" key="canonical" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                
            </Head>
            <Component {...pageProps} />
            <style jsx global>{`
                @import './node_modules/normalize.css/normalize.css';

                body {
                    display: flex;
                    font-family: sans-serif;
                    font-size: 16px;
                    flex-direction: column;
                    margin: 0;
                    align-items: center;
                    justify-content: center;
                    min-height: 85vh;
                }

                #__next {
                    width: 100vw;
                }
            `}</style>
        </Fragment>
    );
};

export default App;
