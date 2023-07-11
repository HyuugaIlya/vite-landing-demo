import React, {
    FC,
    useEffect
} from 'react';
import clsx from "clsx";

import styles from './Menu.module.scss';

type TProps = {
    isScroll: boolean
    isMenuOpen: boolean,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const Menu: FC<TProps> = ({ isMenuOpen, setMenuOpen, isScroll }) => {
    useEffect(() => {
        isMenuOpen
            ? window.document.body.style.overflowY = 'hidden'
            : window.document.body.style.overflow = 'auto';
    }, [isMenuOpen]);

    const onMenuClick = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <div onClick={onMenuClick} className={clsx(styles.iconMenu, isMenuOpen && styles.active, isScroll && styles.scroll)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
