import React from 'react';

import GlobalLinks from './Links';

import { ROUTER_LINK } from '@/utils/consts';
import { blocksIcon, microIcon, musicNoteIcon } from '@/assets';

import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const GLOBAL_LINKS = [
  {
    id: 0,
    href: ROUTER_LINK.MAIN,
    title: 'Слушать',
    icon: blocksIcon,
  },
  {
    id: 1,
    href: ROUTER_LINK.REVIEW,
    title: 'Обзор',
    icon: microIcon,
  },
];

export const GlobalNavbar = (): React.ReactElement => {
  return (
    <aside className={styles['global-nav']}>
      <nav>
        <div className={styles['global-nav__top']}>
          <Link
            className={styles['global-nav__top_link']}
            href={ROUTER_LINK.MAIN}
          >
            <Image
              src={musicNoteIcon}
              alt='music icon'
              height={40}
              width={40}
            />
            Music
          </Link>
        </div>
        <GlobalLinks links={GLOBAL_LINKS} />
      </nav>
    </aside>
  );
};
