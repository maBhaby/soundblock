import React from 'react';

import { mockFetch } from '@/utils/utils';

import { Typography } from '@/ui/Typography/Typography';

import styles from './style.module.scss';
import { MusicCard } from '@/ui/MusicCard/MusicCard';

interface IMusicRes {
  musicList: {
    id: number;
    imageSrc: string;
    title: string;
    artist: string;
  }[];
}

const Review = async (): Promise<React.ReactElement> => {
  const res = await mockFetch<IMusicRes>();

  return (
    <div className={styles.review}>
      <Typography
        className={styles.review__title}
        tag='h1'
        weight='700'
        size='28'
      >
        Rewiev
      </Typography>
      <section className={styles.review__music}>
        <ul className={styles.review__music_list}>
          {res.musicList.map(
            ({ id, title, imageSrc, artist }) => (
              <li className={styles.review__music_item} key={id}>
                <MusicCard
                  artist={artist}
                  title={title}
                  imageSrc={imageSrc}
                />
              </li>
            ),
          )}
        </ul>
      </section>
    </div>
  );
};

export default Review;
