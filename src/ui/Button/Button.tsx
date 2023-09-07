import React, { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from './style.module.scss';

type IProps = {
  color?: 'red' | 'gray';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<IProps> = ({
  className,
  children,
  color = 'gray',
  ...props
}) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles[`button--${color}`]]: Boolean(color),
      })}
      type='button'
      {...props}
    >
      {children}
    </button>
  );
};
