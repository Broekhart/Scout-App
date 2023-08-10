import SkeletonCard from './Skeleton';

const FindScoutSkeleton = () => {
  return (
    <section className='flex_column' style={{ gap: '30px' }}>
      <SkeletonCard height={50} width={250} />
      <SkeletonCard height={80} width={700} />
      <section className='flex mobile_row' style={{ gap: '30px' }}>
        <SkeletonCard height={400} width={270} quantity={3} />
      </section>
    </section>
  );
};

export default FindScoutSkeleton;
