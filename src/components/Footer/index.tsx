import React, { FC } from 'react';
import clsx from 'clsx';

import styles from './Footer.module.scss';

import inst from '../../assets/img/icons/instagram.png';
import twit from '../../assets/img/icons/twitter.png';
import faceB from '../../assets/img/icons/facebook.png';
import dev from '../../assets/img/icons/dev.png';

type TProps = {
    aboutUs: React.RefObject<HTMLDivElement>
}
export const Footer: FC<TProps> = ({ aboutUs }) => {
    return (
        <div ref={aboutUs} className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__row}>
                    <div className={styles.footer__column}>
                        <div className={styles.footer__address}>
                            <p>BMW United Kingdom</p>
                            <p>10-11 Great West Rd, Brentford TW8 9DD,</p>
                            <p>London, W1 - info@domain.com</p>
                        </div>
                    </div>
                    <div className={styles.footer__column}>
                        <div className={clsx(styles.footer__socials, styles.social)}>
                            <a className={styles.social__link}>
                                <img src={twit} alt='icon' />
                            </a>
                            <a className={styles.social__link}>
                                <img src={inst} alt='icon' />
                            </a>
                            <a className={styles.social__link}>
                                <img src={faceB} alt='icon' />
                            </a>
                        </div>
                    </div>
                    <div className={styles.footer__column}>
                        <a className={clsx(styles.footer__dev, styles.dev)}>
                            <span className={styles.dev__text}>made by</span>
                            <span className={styles.dev__icon}>
                                <img src={dev} alt="icon" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
