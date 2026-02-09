import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from '@/components/ClientLayout';

export const metadata: Metadata = {
  title: 'Polyglot School | Leading English Network in Samarkand',
  description: 'A modern, responsive educational platform for an English language school in Samarkand, featuring course catalogs, enrollment forms, and an AI-powered course advisor.',
  icons: {
    icon: '/logo-colorfull.png',
    apple: '/logo-colorfull.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="grain" />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
