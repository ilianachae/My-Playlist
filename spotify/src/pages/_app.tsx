import React from 'react';
import { AppProps } from 'next/app';
import '../../public/styles/global.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <div>
            <header>
                <h1>Most Played Playlist Generator</h1>
            </header>
            <main>
                <Component {...pageProps} />
            </main>
        </div>
    );
};

export default MyApp;
