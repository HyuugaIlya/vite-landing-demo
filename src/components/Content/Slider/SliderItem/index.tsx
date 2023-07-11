import { FC } from 'react';

import twr from '../../../../assets/img/icons/twitterIcon.svg';

import styles from './SliderItem.module.scss';

type TProps = {
    title: string
    time: string
    text: string
}
export const SliderItem: FC<TProps> = ({ text, time, title }) => {
    return (
        <div className={styles.slider__item}>
            <div className={styles.slider__icon}>
                <img src={twr} alt="" />
            </div>
            <h3 className={styles.slider__title}>
                {title} <span>/ {time} min</span>
            </h3>
            <div className={styles.slider__text}>
                {text}
            </div>
        </div>
    )
}