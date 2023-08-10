import SkeletonCard from './Skeleton';

const ProductSkeleton = () => {
  return (
    <section className='flex_column' style={{ gap: '20px' }}>
      <SkeletonCard height={40} width={350} />
      <SkeletonCard height={270} width={350} />
      <SkeletonCard height={300} width={350} />
    </section>
  );
};

export default ProductSkeleton;
