import React, { Fragment } from 'react';

const App = ({ Component, pageProps }) => {
    return (
        <Fragment>
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
