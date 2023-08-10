type Props = {
  quantity?: number;
  height: number | string;
  width: number | string;
};

const SkeletonCard = ({ quantity = 1, height, width }: Props) => {
  const skeletonCards = Array.from({ length: quantity }, (_, index) => (
    <div key={index} className='skeleton_card' style={{ height, maxWidth: width, width: '100%' }}>
      <div className='slider'></div>
    </div>
  ));

  return <>{skeletonCards}</>;
};

export default SkeletonCard;
