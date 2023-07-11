import {
  useEffect,
  useState,
  useRef,
  ReactElement
} from 'react';
import clsx from 'clsx';

import { Header } from './components/Header';
import { Generation } from './components/Content/Generation';
import { Brand } from './components/Content/Brand';
import { CustomSlider } from './components/Content/Slider';
import { Shop } from './components/Content/Shop';
import { ContactForm } from './components/Content/ContactForm';
import { Footer } from './components/Footer';

import { ibgImg } from './components/Common/ibg/ibgSelector';
import bgMain from './assets/img/bg_main.jpg';

import styles from './assets/scss/App.module.scss';

export type TRefs = {
  aboutUs: React.RefObject<HTMLDivElement>
  brand: React.RefObject<HTMLDivElement>
  shop: React.RefObject<HTMLDivElement>
  contact: React.RefObject<HTMLDivElement>
}
function App(): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScroll, setScroll] = useState<boolean>(false);

  const refs: TRefs = {
    aboutUs: useRef<HTMLDivElement>(null),
    brand: useRef<HTMLDivElement>(null),
    shop: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const ibg = Array.from(
      document.getElementsByClassName(styles.ibg) as HTMLCollectionOf<HTMLElement>
    );

    ibgImg(ibg);
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      const scroll = window.scrollY;

      if (scroll > 70) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.page}>
        <Header
          isScroll={isScroll}
          isMenuOpen={isMenuOpen}
          setMenuOpen={setMenuOpen}
          refs={refs}
        />
        <div className={styles.mainScreen}>
          <div className={clsx(styles.mainScreen__bg, styles.ibg)}>
            <img src={bgMain} alt="mainBg" />
          </div>
        </div>
        <div className={styles.content}>
          <Generation />
          <Brand brand={refs.brand} />
          <CustomSlider />
          <Shop shop={refs.shop} />
          <ContactForm contact={refs.contact} />
        </div>
        <Footer aboutUs={refs.aboutUs} />
        {isScroll && <div className={styles.topBtn}>
          <button onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
                fill="#000000"
              />
            </svg>
          </button>
        </div>}
      </div>
    </div>
  )
}

export default App;