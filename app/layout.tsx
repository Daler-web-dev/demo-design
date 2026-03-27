import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: 'Polyglot School | Leading English Network in Samarkand',
  description: 'A modern, responsive educational platform for an English language school in Samarkand, featuring course catalogs, enrollment forms, and an AI-powered course advisor.',
  icons: {
    icon: '/logo-colorfull.png',
    apple: '/logo-colorfull.png',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <div className="grain" />
        <NextIntlClientProvider>
          <ClientLayout>{children}</ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
