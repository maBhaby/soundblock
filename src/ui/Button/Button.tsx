import React, { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from './style.module.scss';

type IProps = {
  color?: 'red' | 'gray';
  className?: string;
  variant?: 'transparent';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<IProps> = ({
  className,
  children,
  color = 'gray',
  variant,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(styles.button, className, {
        [styles[`button--${color}`]]: Boolean(color),
        [styles[`button--${variant}`]]: Boolean(variant),
      })}
      type='button'
    >
      {children}
    </button>
  );
};
