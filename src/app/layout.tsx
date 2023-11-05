import type { Metadata } from 'next';
import { GeistSans } from 'geist/font';
import Header from '@/components/header';
import { clsxm } from '@/lib/utils';

import './globals.css';
import { Nav } from '@/components/nav';

export const metadata: Metadata = {
  title: 'Nenad Brcic | Software Engineer | Personal Portfolio',
  description:
    'Nenad is a full-stack software developer based in Bern Switzerland with 15+ years of experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${GeistSans.className} bg-gray-50 text-gray-950 relative h-[5000px]`}
      >
        <div
          className={clsxm(
            'absolute h-[31.25rem] w-[31.25rem] sm:w-[68.75rem] -z-10',
            'top-[-6rem] right-[11rem]',
            'bg-[#fbe2e3] rounded-full blur-[10rem]'
          )}
        />
        <div
          className={clsxm(
            'absolute h-[31.25rem] w-[50rem] sm:w-[68.75rem] -z-10',
            'top-[-1rem] left-[-35rem]: md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]',
            'bg-[#dbd7fb] rounded-full blur-[10rem]'
          )}
        />
        <Header>
          <Nav />
        </Header>
        {children}
      </body>
    </html>
  );
}
