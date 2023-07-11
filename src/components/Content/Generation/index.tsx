import { FC } from 'react';
import clsx from 'clsx';

import styles from './Generation.module.scss';

export const Generation: FC = () => {
    return (
        <div className={styles.generation}>
            <div className={styles.container}>
                <div className={clsx(styles.generation__block, styles.block)}>
                    <div className={styles.block__icon}>
                        <svg viewBox="0 0 192.756 192.756" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g fillRule="evenodd" clipRule="evenodd">
                                    <path fill="#ffffff" d="M0 0h192.756v192.756H0V0z"></path>
                                    <path fill="#33a0d1" d="M41.517 65.083H63.49l-33.012 59.935H8.504l33.013-59.935z"></path>
                                    <path fill="#373485" d="M63.49 65.083h23.718l-33.012 59.935H30.478L63.49 65.083z"></path>
                                    <path fill="#c52b30" d="M87.208 65.083h23.626l-33.011 59.935H54.196l33.012-59.935z"></path>
                                    <path fill="#e6e6e7" d="M118.26 65.083h22.043l.687 26.952 14.844-26.952h19.463l1.498 59.935h-20.609V97.532l-13.793 27.486h-19.571l.315-26.782-14.117 26.782H85.248l33.012-59.935z"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <h1 className={styles.block__title}>GENERATION OF BMW M4 FOR ALL</h1>
                    <div className={styles.block__text}>
                        The BMW M4 is a high-performance version of the BMW 4 Series coupes and convertibles developed by BMW's motorsport division, BMW M, and marketed since 2014. As part of the renumbering that splits the 3 Series coupé and convertible models into the 4 Series, the M4 replaced the BMW M3 coupé and convertible models.
                    </div>
                </div>
            </div>
        </div>
    )
}