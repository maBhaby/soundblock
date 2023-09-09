import React, { HTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from './styles.module.scss';

interface IProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  size?: '28' | '24' | '18' | '16' | '14' | '12';
  weight?: '700' | '600' | '500' | '400';
}

export const Typography: React.FC<IProps> = ({
  children,
  tag: View = 'p',
  className,
  size = '16',
  weight = '400',
  ...props
}) => {
  return (
    <View
      {...props}
      className={clsx(styles.typography, className, {
        [styles[`typography--${size}`]]: Boolean(size),
        [styles[`typography--${weight}`]]: Boolean(weight),
      })}
    >
      {children}
    </View>
  );
};
