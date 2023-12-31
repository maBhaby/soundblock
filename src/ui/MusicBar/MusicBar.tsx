import React from 'react';

import { Player } from '../Player/Player';
import { Slider } from '../Slider/Slider';

import styles from './style.module.scss';

export const MusicBar = (): React.ReactElement => {
  return (
    <div className={styles['music-bar']}>
      <div className={styles['music-bar__container']}>
        <Player />
        <div>currentMusic</div>
        <Slider />
      </div>
    </div>
  );
};
