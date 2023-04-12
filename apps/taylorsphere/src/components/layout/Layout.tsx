import type { ReactNode } from 'react';
import Footer from '../footer/Footer';
import NavigationBar from '../navigation/NavigationBar';
import { HeadMeta } from './HeadMeta';

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <HeadMeta />
            <NavigationBar />
            {children}
            <Footer />
        </>
    );
};
