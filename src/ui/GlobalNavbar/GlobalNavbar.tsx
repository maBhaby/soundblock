import React from 'react';

import GlobalLinks from './Links';

import { ALL_LINKS } from '@/utils/consts';

import styles from './styles.module.scss';
import { blocksIcon } from '@/assets';

const GLOBAL_LINKS = [
  {
    id: 0,
    href: ALL_LINKS.MAIN,
    title: 'Слушать',
    icon: blocksIcon,
  },
  {
    id: 1,
    href: ALL_LINKS.REVIEW,
    title: 'Обзор',
    icon: blocksIcon,
  },
];

export const GlobalNavbar = (): React.ReactElement => {
  return (
    <article className={styles['global-nav']}>
      <nav>
        <GlobalLinks links={GLOBAL_LINKS} />
      </nav>
    </article>
  );
};
