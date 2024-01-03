// components/RootLayout.tsx
import type { Metadata } from 'next';
import './globals.css'; // Import the global stylesheet
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
      </head>
      <body className="keepcalm-font">
        <HamburgerMenu />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
