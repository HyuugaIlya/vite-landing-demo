import {
    useEffect,
    FC
} from 'react';
import clsx from 'clsx';

import { ibgImg } from '../../Common/ibg/ibgSelector';

import styles from './Shop.module.scss';

import logo1 from '../../../assets/img/shop/01.jpg';
import logo2 from '../../../assets/img/shop/03.jpg';
import logo3 from '../../../assets/img/shop/02.jpg';
import logo4 from '../../../assets/img/shop/04.jpg';
import logo5 from '../../../assets/img/shop/05_1.jpg';
import logo6 from '../../../assets/img/shop/06.jpg';
import logo7 from '../../../assets/img/shop/07.jpg';
import logo8 from '../../../assets/img/shop/08.jpg';

import iconLogo from '../../../assets/img/logos/02.svg';

type TProps = {
    shop: React.RefObject<HTMLDivElement>
}
export const Shop: FC<TProps> = ({ shop }) => {
    useEffect(() => {
        const ibg = Array.from(
            document.getElementsByClassName(styles.ibg) as HTMLCollectionOf<HTMLElement>
        );

        ibgImg(ibg);
    }, []);

    return (
        <div ref={shop} className={styles.shop}>
            <div className={styles.shop__body}>
                <div className={clsx(styles.shop__column, styles.big)}>
                    <div className={clsx(styles.shop__block, styles.blockShop)}>
                        <div className={styles.blockShop__row}>
                            <div className={styles.blockShop__column}>
                                <a href="#" className={clsx(styles.blockShop__item, styles.blockShop__item__l, styles.item)}>
                                    <span className={clsx(styles.item__logo, styles.second__item)}>
                                        <img src={iconLogo} alt="logo" />
                                        <span>SHOP NOW</span>
                                    </span>
                                    <span className={clsx(styles.item__img, styles.ibg)}>
                                        <img src={logo6} alt="logo" />
                                    </span>
                                </a>
                            </div>
                            <div className={styles.blockShop__column}>
                                <a href="#" className={clsx(styles.blockShop__item, styles.blockShop__item__l, styles.item)}>
                                    <span className={clsx(styles.item__logo, styles.second__item)}>
                                        <img src={iconLogo} alt="logo" />
                                        <span>SHOP NOW</span>
                                    </span>
                                    <span className={clsx(styles.item__img, styles.ibg)}>
                                        <img src={logo2} alt="logo" />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <a href="#" className={clsx(styles.blockShop__item, styles.item)}>
                            <span className={clsx(styles.item__logo, styles.second__item)}>
                                <img src={iconLogo} alt="logo" />
                                <span>SHOP NOW</span>
                            </span>
                            <span className={clsx(styles.item__img, styles.ibg)}>
                                <img src={logo4} alt="logo" />
                            </span>
                        </a>
                    </div>
                </div>
                <div className={styles.shop__column}>
                    <a href="#" className={clsx(styles.blockShop__item, styles.blockShop__item__big, styles.item)}>
                        <span className={clsx(styles.item__logo, styles.second__item)}>
                            <img src={iconLogo} alt="logo" />
                            <span>SHOP NOW</span>
                        </span>
                        <span className={clsx(styles.item__img, styles.ibg)}>
                            <img src={logo5} alt="logo" />
                        </span>
                    </a>
                </div>
                <div className={styles.shop__column}>
                    <a href="#" className={clsx(styles.blockShop__item, styles.blockShop__item__big, styles.item)}>
                        <span className={clsx(styles.item__logo, styles.second__item)}>
                            <img src={iconLogo} alt="logo" />
                            <span>SHOP NOW</span>
                        </span>
                        <span className={clsx(styles.item__img, styles.ibg)}>
                            <img src={logo8} alt="logo" />
                        </span>
                    </a>
                </div>
                <div className={clsx(styles.shop__column, styles.big)}>
                    <div className={clsx(styles.shop__block, styles.blockShop)}>
                        <a href="#" className={clsx(styles.blockShop__item, styles.item)}>
                            <span className={clsx(styles.item__logo, styles.second__item)}>
                                <img src={iconLogo} alt="logo" />
                                <span>SHOP NOW</span>
                            </span>
                            <span className={clsx(styles.item__img, styles.ibg)}>
                                <img src={logo3} alt="logo" />
                            </span>
                        </a>
                        <div className={styles.blockShop__row}>
                            <div className={styles.blockShop__column}>
                                <a href="#" className={clsx(styles.blockShop__item, styles.blockShop__item__l, styles.item)}>
                                    <span className={clsx(styles.item__logo, styles.second__item)}>
                                        <img src={iconLogo} alt="logo" />
                                        <span>SHOP NOW</span>
                                    </span>
                                    <span className={clsx(styles.item__img, styles.ibg)}>
                                        <img src={logo7} alt="logo" />
                                    </span>
                                </a>
                            </div>
                            <div className={styles.blockShop__column}>
                                <a href="#" className={clsx(styles.blockShop__item, styles.blockShop__item__l, styles.item)}>
                                    <span className={clsx(styles.item__logo, styles.second__item)}>
                                        <img src={iconLogo} alt="logo" />
                                        <span>SHOP NOW</span>
                                    </span>
                                    <span className={clsx(styles.item__img, styles.ibg)}>
                                        <img src={logo1} alt="logo" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.shop__footer}>
                <div className={styles.container}>
                    <a href="#" className={styles.shop__btn}>DISCOVER THE SHOP</a>
                </div>
            </div>
        </div>
    );
}
