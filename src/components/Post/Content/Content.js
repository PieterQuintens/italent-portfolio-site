// @flow strict
import React from 'react';
import styles from './Content.module.scss';
import LocationMeta from '../Location';

type Props = {
  body: string,
  title: string,
  date: string,
  duration: string,
  location: string
};

const Content = ({ body, title, date, duration, location }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__body']}>
      <LocationMeta className={styles['content__body']} date={date} duration={duration} location={location} ></LocationMeta>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>

  </div>
);

export default Content;
