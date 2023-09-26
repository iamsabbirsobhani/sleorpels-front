import './globals.css';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { Providers } from './provider';
import { API } from '../apiendpoint';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
