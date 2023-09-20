import {
    FC,
    useEffect
} from 'react'; import clsx from 'clsx';

import { ibgImg } from '../../Common/ibg/ibgSelector';


import brand1 from '../../../assets/img/brand/brand1.png';
import brand1sm from '../../../assets/img/brand/brand1sm.jpg';
import logo1 from '../../../assets/img/logos/01.png';
import brandLogo1 from '../../../assets/img/logos/logo1.svg';

import brand2 from '../../../assets/img/brand/brand2.jpg';
import brand2sm from '../../../assets/img/brand/brand2sm.jpg';
import logo2 from '../../../assets/img/logos/02.svg';
import brandLogo2 from '../../../assets/img/logos/logo2.svg';

import brand3 from '../../../assets/img/brand/brand3.jpg';
import brand3_1 from '../../../assets/img/brand/brand3.1.jpg';
import brand3sm from '../../../assets/img/brand/brand3sm.jpg';
import brandLogo3 from '../../../assets/img/logos/logo3.svg';

import styles from './Brand.module.scss';

const Titles = ['CHOOSE YOUR OWN M4', 'CHANGE YOUR LIFESTYLE', '#M4Nation'];

const Text = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iste magnam. Quaerat architecto porro ducimus laborum quos ipsa eligendi, non sed minus beatae, ipsum aperiam laboriosam dicta fugiat ex quia.'
];

type TProps = {
    brand: React.RefObject<HTMLDivElement>
}
export const Brand: FC<TProps> = ({ brand }) => {
    useEffect(() => {
        const ibg = Array.from(
            document.getElementsByClassName(styles.ibg) as HTMLCollectionOf<HTMLElement>
        );

        ibgImg(ibg);
    }, []);

    return <>
        <div ref={brand} className={styles.brand}>
            <div className={styles.brand__row}>
                <div className={clsx(styles.brand__column, styles.big)}>
                    <a href="https://www.bmw.ru/ru/index.html" className={clsx(styles.brand__item, styles.item)}>
                        <span className={styles.item__logo}>
                            <img src={logo1} alt="logo" />
                        </span>
                        <span className={clsx(styles.item__img, styles.ibg)}>
                            <img src={brand1} alt="logo" />
                        </span>
                    </a>
                </div>
                <div className={styles.brand__column}>
                    <div className={clsx(styles.brand__content, styles.block)}>
                        <div className={styles.block__icon}>
                            <img src={brandLogo1} alt="logo" />
                        </div>
                        <h2 className={styles.block__title}>{Titles[0]}</h2>
                        <div className={clsx(styles.block__text, styles.block__text_j)}>
                            {Text[0]}
                        </div>
                    </div>
                    <div className={clsx(styles.brand__img, styles.ibg)}>
                        <img src={brand1sm} alt="img" />
                    </div>
                </div>
            </div>
        </div>
        <div className={clsx(styles.brand, styles.rev)}>
            <div className={styles.brand__row}>
                <div className={clsx(styles.brand__column, styles.big)}>
                    <a href="https://www.bmw.ru/ru/index.html" className={clsx(styles.brand__item, styles.item)}>
                        <span className={clsx(styles.item__logo, styles.second__item)}>
                            <img src={logo2} alt="logo" />
                            <span className={styles.brandLogo__span}>Motorsport</span>
                        </span>
                        <span className={clsx(styles.item__img, styles.ibg)}>
                            <img src={brand2} alt="logo" />
                        </span>
                    </a>
                </div>
                <div className={styles.brand__column}>
                    <div className={clsx(styles.brand__content, styles.block)}>
                        <div className={styles.block__icon}>
                            <img src={brandLogo2} alt="logo" />
                        </div>
                        <h2 className={styles.block__title}>{Titles[1]}</h2>
                        <div className={clsx(styles.block__text, styles.block__text_j)}>
                            {Text[0]}
                        </div>
                    </div>
                    <div className={clsx(styles.brand__img, styles.ibg)}>
                        <img src={brand2sm} alt="img" />
                    </div>
                </div>
            </div>
        </div>
        <div className={clsx(styles.brand, styles.rev)}>
            <div className={styles.brand__row}>
                <div className={styles.brand__column}>
                    <a href="https://www.bmw.ru/ru/index.html" className={clsx(styles.brand__item, styles.item)}>
                        <span className={styles.item__logo}>
                            <img src={logo1} alt="logo" />
                        </span>
                        <span className={clsx(styles.item__img, styles.ibg)}>
                            <img src={brand3_1} alt="logo" />
                        </span>
                    </a>
                </div>
                <div className={styles.brand__column}>
                    <div className={clsx(styles.brand__content, styles.block)}>
                        <div className={styles.block__icon}>
                            <img src={brandLogo3} alt="logo" />
                        </div>
                        <h2 className={styles.block__title}>{Titles[2]}</h2>
                        <div className={clsx(styles.block__text, styles.block__text_j)}>
                            {Text[0]}
                        </div>
                    </div>
                    <div className={clsx(styles.brand__img, styles.ibg)}>
                        <img src={brand3sm} alt="img" />
                    </div>
                </div>
                <div className={styles.brand__column}>
                    <div className={clsx(styles.brand__block)}>
                        <span className={clsx(styles.item__img, styles.ibg)}>
                            <img src={brand3} alt="logo" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>
}
