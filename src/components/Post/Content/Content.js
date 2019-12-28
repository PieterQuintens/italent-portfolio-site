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
    <LocationMeta className={styles['content__title']} date={date} duration={duration} location={location} ></LocationMeta>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
