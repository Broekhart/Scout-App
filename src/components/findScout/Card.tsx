import Image from 'next/image';
import styles from '@/styles/findScout/Card.module.css';
import Link from 'next/link';
import { TbClockHour4, TbCalendarCheck } from 'react-icons/tb';
import { Scout } from '@/shared/types/scouts';

type Props = {
  scout: Scout;
};

const Card = ({ scout }: Props) => {
  const { _id, coverImage, skills, name, experience, availability } = scout;
  return (
    <Link href={`/scout/${_id}`}>
      <article className={styles.card}>
        <div className={styles.image}>
          <Image alt='avatar' fill={true} src={coverImage} />
        </div>
        <section className={`flex ${styles.badges}`}>
          {skills?.map((skill) => (
            <p className='badge' key={skill}>
              {skill}
            </p>
          ))}
        </section>
        <h4>{name}</h4>
        <div className='flex' style={{ gap: '7px', alignItems: 'center', marginBlock: '5px 15px' }}>
          <TbClockHour4 style={{ height: '16px', width: '16px', color: 'var(--grey)' }} />
          <span className='grey'>{experience} anni</span>
        </div>
        <div className='flex' style={{ gap: '5px', alignItems: 'center' }}>
          <TbCalendarCheck style={{ height: '18px', width: '18px' }} />
          <b>{availability}</b>
        </div>
        <button>Approfondisci</button>
      </article>
    </Link>
  );
};

export default Card;
