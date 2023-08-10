import Image from 'next/image';
import styles from '@/styles/findScout/Card.module.css';
import Link from 'next/link';
import { TbClockHour4, TbCalendarCheck } from 'react-icons/tb';

const Card = () => {
  return (
    <Link href={`/`}>
      <article className={styles.card}>
        <div className={styles.image}>
          <Image
            alt='avatar'
            fill={true}
            src='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80'
          />
        </div>
        <section className={`flex ${styles.badges}`}>
          <p className='badge'>Skill 1</p>
          <p className='badge'>Skill 2</p>
          <p className='badge'>Skill 3</p>
        </section>
        <h4>Nome</h4>
        <div className='flex' style={{ gap: '7px', alignItems: 'center', marginBlock: '5px 15px' }}>
          <TbClockHour4 style={{ height: '16px', width: '16px', color: 'var(--grey)' }} />
          <span className='grey'>5 anni</span>
        </div>
        <div className='flex' style={{ gap: '5px', alignItems: 'center' }}>
          <TbCalendarCheck style={{ height: '18px', width: '18px' }} />
          <b>12/05 - 30/06</b>
        </div>
        <button>Approfondisci</button>
      </article>
    </Link>
  );
};

export default Card;
