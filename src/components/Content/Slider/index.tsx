import { FC } from 'react';
import Slider from 'react-slick';

import { SliderItem } from './SliderItem';

import '../../../assets/scss/components/slick.scss';

import styles from './Slider.module.scss';

const text = [
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt architecto debitis ad officia, facilis accusamus veritatis aliquam possimus, accusantium sunt doloremque fugit quibusdam perspiciatis. Accusamus distinctio eligendi earum expedita.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt architecto debitis ad officia, facilis accusamus veritatis aliquam possimus, accusantium sunt doloremque fugit quibusdam perspiciatis. Accusamus distinctio eligendi earum expedita.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt architecto debitis ad officia, facilis accusamus veritatis aliquam possimus, accusantium sunt doloremque fugit quibusdam perspiciatis. Accusamus distinctio eligendi earum expedita.'
];
const titles = [
    'BMW GEN (@bmw_gen)',
    'M4 Nation (@m4_nat)',
    'BMWonderful (@bm_wond)'
];

export const CustomSlider: FC = () => {
    type TArr = {
        currentSlide: number
    }
    const SlickArrL: FC<TArr> = ({ currentSlide }) => {
        return <button type="button" className={'slick-prev' + (currentSlide === 0 ? 'slick-disabled' : '')}></button>
    }
    const SlickArrR: FC<TArr> = ({ currentSlide }) => {
        return <button type="button" className={'slick-prev' + (currentSlide === 0 ? 'slick-disabled' : '')}></button>
    }

    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        accessibility: false,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        nextArrow: <SlickArrR currentSlide={0} />,
        prevArrow: <SlickArrL currentSlide={0} />,
        responsive: [{
            breakpoint: 767,
            settings: {}
        }]
    };

    return (
        <div className={styles.slider}>
            <div className={styles.container}>
                <div className={styles.slider__body}>
                    <Slider {...settings}>
                        <SliderItem text={text[0]} title={titles[0]} time={'20'} />
                        <SliderItem text={text[1]} title={titles[1]} time={'35'} />
                        <SliderItem text={text[0]} title={titles[2]} time={'15'} />
                    </Slider>
                </div>
            </div>
        </div>
    )
}