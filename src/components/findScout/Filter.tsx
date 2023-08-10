import styles from '@/styles/findScout/Filter.module.css';
import { HiOutlineMenuAlt2, HiCalendar, HiArrowSmDown } from 'react-icons/hi';

const Filter = () => {
  return (
    <section className={styles.filter}>
      <section>
        <div className={styles.search_flex}>
          <span className={styles.dash_icon}>
            <HiOutlineMenuAlt2 />
          </span>
          <p>Ordina per: A-Z</p>
          <HiArrowSmDown style={{ marginLeft: 13 }} />
        </div>
      </section>
      <section>
        <div className={styles.search_flex}>
          <HiCalendar />
          <p>Qualsiasi data</p>
          <HiArrowSmDown style={{ marginLeft: 13 }} />
        </div>
      </section>
      <section className={styles.input}>
        <input type='text' />
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 24 24'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'>
          <path fill='none' d='M0 0h24v24H0z'></path>
          <path d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path>
        </svg>
      </section>
    </section>
  );
};

export default Filter;
