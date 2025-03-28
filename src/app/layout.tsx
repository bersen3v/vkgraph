import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const helvetica = localFont({
  src: [
    {
      path: '../../public/fonts/HelveticaNeue-Thin.otf',
      weight: '200',
      style: 'thin',
    },
    {
      path: '../../public/fonts/HelveticaNeue-Roman.otf',
      weight: '500',
      style: 'roman',
    },
    {
      path: '../../public/fonts/HelveticaNeue-Medium.otf',
      weight: '400',
      style: 'medium',
    },
    {
      path: '../../public/fonts/HelveticaNeue-Light.otf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../../public/fonts/HelveticaNeue-Bold.otf',
      weight: '700',
      style: 'bold',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${helvetica.className} antialiased`}>{children}</body>
    </html>
  );
}
