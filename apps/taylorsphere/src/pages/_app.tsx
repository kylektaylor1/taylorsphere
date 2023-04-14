import { type AppType } from 'next/app';
import { ClerkProvider } from '@clerk/nextjs';

import '../styles/globals.css';

const TaylorSphereapp: AppType = ({ pageProps, Component }) => {
    return (
        <ClerkProvider {...pageProps}>
            <Component {...pageProps} />
        </ClerkProvider>
    );
};

export default TaylorSphereapp;
