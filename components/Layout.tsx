import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ErrorBoundary } from './ErrorBoundary';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <ErrorBoundary>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow pt-24">
                    {children}
                </main>
                <Footer />
            </div>
        </ErrorBoundary>
    );
};
