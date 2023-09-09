import React from 'react';

import styles from './style.module.scss';

const mockFetch = (): Promise<string> => {
  return new Promise((res) => {
    setTimeout(() => {
      res('good');
    }, 5000);
  });
};

const Review = async (): Promise<React.ReactElement> => {
  const res = await mockFetch();

  return <section className={styles.review}>{res}</section>;
};

export default Review;
