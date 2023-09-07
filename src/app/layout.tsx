import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { GlobalNavbar } from '@/ui/GlobalNavbar/GlobalNavbar';
import { MusicBar } from '@/ui/MusicBar/MusicBar';

import styles from './styles.module.scss';
import '../styles/index.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Music App',
  description: 'Best music app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <div className={styles['main-layout']}>
          <GlobalNavbar />
          <MusicBar />
          {children}
        </div>
      </body>
    </html>
  );
}
