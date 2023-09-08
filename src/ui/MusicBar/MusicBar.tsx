import React from 'react';

import { Player } from '../Player/Player';

import styles from './style.module.scss';
import { Slider } from '../Slider/Slider';

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
