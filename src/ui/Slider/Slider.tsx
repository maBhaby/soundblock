import React, { InputHTMLAttributes } from 'react';

type TSlider = {} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
>;

import styles from './styles.module.scss';

export const Slider: React.FC<TSlider> = (props) => {
  return (
    <input {...props} className={styles.slider} type='range' />
  );
};
