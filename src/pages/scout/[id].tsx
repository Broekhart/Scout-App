import useFetch from '@/components/shared/hooks/useFetch';
import { useRouter } from 'next/router';
import { Scout } from '@/shared/types/scouts';
import DashboardLayout from '@/layouts/DashboardLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import ProductSkeleton from '@/components/shared/ui/skeletons/ProductSkeleton';
import BiggerCard from '@/components/findScout/BiggerCard';

const Scout: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: scout, loading } = useFetch<Scout>(`/scouts/${id}`);

  if (loading) return <ProductSkeleton />;

  if (!scout) return null;

  return <BiggerCard scout={scout} />;
};

Scout.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Scout;
