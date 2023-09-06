'use client';

import React from 'react';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';

interface IProps {
  links: {
    id: number;
    href: string;
    title: string;
    icon: string;
  }[];
}

const Links: React.FC<IProps> = ({ links }) => {
  const currentPath = usePathname();
  return (
    <ul className={styles['global-nav__list']}>
      {links.map(({ id, href, title, icon }) => {
        return (
          <li className={styles['global-nav__items']} key={id}>
            <Link
              className={clsx(styles['global-nav__link'], {
                [styles['global-nav__link--active']]:
                  currentPath === href,
              })}
              href={href}
            >
              <Image
                src={icon}
                alt={title}
                height={24}
                width={24}
              />
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
