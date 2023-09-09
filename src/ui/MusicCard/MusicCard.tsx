import React from 'react';

import Image from 'next/image';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';

import styles from './style.module.scss';

interface IProps {
  title: string;
  imageSrc: string;
  artist: string;
}

export const MusicCard: React.FC<IProps> = ({
  title,
  imageSrc,
  artist,
}) => {
  return (
    <div className={styles['music-card']}>
      <div className={styles['music-card__wrap']}>
        <Image
          className={styles['music-card__img']}
          src={imageSrc}
          alt={title}
          width={170}
          height={170}
        />
        <Button className={styles['music-card__btn_play']}>
          <svg
            fill='currentColor'
            width='30px'
            height='30px'
            viewBox='0 0 32 32'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z'></path>
          </svg>
        </Button>
      </div>
      <Typography
        tag='h3'
        size='14'
        className={styles['music-card__title']}
      >
        {title}
      </Typography>
      <Typography
        size='12'
        className={styles['music-card__subtitle']}
      >
        {artist}
      </Typography>
    </div>
  );
};
