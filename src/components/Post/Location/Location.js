import React from 'react';
import moment from 'moment';
import { faMapMarkerAlt, faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Location.module.scss';


type Props = {
    date: string,
    duration: string,
    location: string
};

const LocationMeta = ({ date, duration, location }: Props) => (

    <ul className={styles['location__ul']}>
        <li className={styles['location__li']}>
            <div className={styles['location__div']}>
                <span className={styles['location__span']}>
                    <FontAwesomeIcon className={styles['location__icon']} icon={faMapMarkerAlt} />
                    <p className={styles['location__text']}>{location}</p>
                </span>
            </div>
        </li>
        <li className={styles['location__li']}>
            <div className={styles['location__div']}>
                <span className={styles['location__span']}>

                    <FontAwesomeIcon className={styles['location__icon']} icon={faClock} />
                    <p className={styles['location__text']}>{duration}</p>
                </span>
            </div>
        </li>
        <li className={styles['location__li']}>
            <div className={styles['location__div']}>
                <span className={styles['location__span']}>
                    <FontAwesomeIcon className={styles['location__icon']} icon={faCalendarAlt} />
                    <p className={styles['location__text']}>{moment(date).format('D MMMM YYYY')}</p>
                </span>
            </div>
        </li>
    </ul>
);

export default LocationMeta;
