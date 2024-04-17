import './globals.css';
import { Providers } from './redux/provider';
import { DM_Sans } from 'next/font/google';

const DMSans = DM_Sans({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Blitz Stats',
  description: 'Dashboards for Blitz metrics. Volumes, new users, TVL...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={DMSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
