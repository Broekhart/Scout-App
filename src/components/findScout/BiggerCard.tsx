import Image from 'next/image';
import styles from '@/styles/findScout/Card.module.css';
import { TbClockHour4, TbCalendarCheck } from 'react-icons/tb';
import { Scout } from '@/shared/types/scouts';

type Props = {
  scout: Scout;
};

const BiggerCard = ({ scout }: Props) => {
  const { coverImage, skills, description, name, experience, availability } = scout;

  return (
    <article className={`${styles.bigger_card} flex_column`}>
      <h1>{name}</h1>
      <Image alt='scout' height={350} width={450} style={{ objectFit: 'cover' }} src={coverImage} />
      <section className={`${styles.badges} flex`}>
        {skills?.map((skill) => (
          <p className='badge' key={skill}>
            {skill}
          </p>
        ))}
      </section>
      <div className='flex' style={{ gap: '7px', alignItems: 'center' }}>
        <TbClockHour4 style={{ height: '18px', width: '18px', color: 'var(--grey)' }} />
        <p className='grey'>{experience} anni</p>
      </div>
      <div className='flex' style={{ gap: '5px', alignItems: 'center' }}>
        <TbCalendarCheck style={{ height: '18px', width: '18px' }} />
        <h4>{availability}</h4>
      </div>
      <div
        className='flex_column'
        style={{ gap: 10 }}
        dangerouslySetInnerHTML={{ __html: description ?? '' }}></div>
      <button>Contattami</button>
    </article>
  );
};

export default BiggerCard;
