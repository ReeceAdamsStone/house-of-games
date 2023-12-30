// components/RootLayout.tsx


import type { Metadata } from 'next';
import './globals.css';
import PageTransition from './components/PageTransition';
import HamburgerMenu from './components/HamburgerMenu';


export const metadata: Metadata = {
  title: '2024 House of Games',
  description: 'Quiz night!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
                      {/* Navigation Menu */}
      
        <link rel="stylesheet" href="/C:/Users/Reece/Desktop/Code/fonts" />
      </head>
      <body className="keepcalm-font">
        <HamburgerMenu />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
