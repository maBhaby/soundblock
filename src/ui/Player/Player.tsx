'use client';

import React from 'react';

import { Button } from '../Button/Button';

import styles from './styles.module.scss';

export const Player = (): React.ReactElement => {
  return (
    <div className={styles.player}>
      <Button
        className={styles.player__prev}
        variant='transparent'
      >
        <svg
          width='20px'
          height='20px'
          viewBox='0 -2 12 12'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g
            id='Page-1'
            stroke='none'
            stroke-width='1'
            fill='none'
            fill-rule='evenodd'
          >
            <g
              id='Dribbble-Light-Preview'
              transform='translate(-144.000000, -3805.000000)'
              fill='currentColor'
            >
              <g
                id='icons'
                transform='translate(56.000000, 160.000000)'
              >
                <path
                  d='M99.684,3649.69353 L95.207,3652.82453 C94.571,3653.25353 94,3652.84553 94,3652.13153 L94,3650.14053 L89.78,3652.82453 C89.145,3653.25353 88,3652.84553 88,3652.13153 L88,3645.86853 C88,3645.15453 89.145,3644.74653 89.78,3645.17453 L94,3647.85953 L94,3645.86853 C94,3645.15453 94.571,3644.74653 95.207,3645.17453 L99.516,3648.30653 C100.03,3648.65353 100.198,3649.34653 99.684,3649.69353'
                  id='next-[#998]'
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </Button>
      <Button
        className={styles.player__play}
        variant='transparent'
      >
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
      <Button
        className={styles.player__next}
        variant='transparent'
      >
        <svg
          width='20px'
          height='20px'
          viewBox='0 -2 12 12'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g
            id='Page-1'
            stroke='none'
            stroke-width='1'
            fill='none'
            fill-rule='evenodd'
          >
            <g
              id='Dribbble-Light-Preview'
              transform='translate(-144.000000, -3805.000000)'
              fill='currentColor'
            >
              <g
                id='icons'
                transform='translate(56.000000, 160.000000)'
              >
                <path
                  d='M99.684,3649.69353 L95.207,3652.82453 C94.571,3653.25353 94,3652.84553 94,3652.13153 L94,3650.14053 L89.78,3652.82453 C89.145,3653.25353 88,3652.84553 88,3652.13153 L88,3645.86853 C88,3645.15453 89.145,3644.74653 89.78,3645.17453 L94,3647.85953 L94,3645.86853 C94,3645.15453 94.571,3644.74653 95.207,3645.17453 L99.516,3648.30653 C100.03,3648.65353 100.198,3649.34653 99.684,3649.69353'
                  id='next-[#998]'
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </Button>
    </div>
  );
};
