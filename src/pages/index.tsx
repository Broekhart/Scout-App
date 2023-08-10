import { type ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import DashboardLayout from '@/layouts/DashboardLayout';
import Filter from '@/components/findScout/Filter';
import Card from '@/components/findScout/Card';
import styles from '@/styles/findScout/Home.module.css';
import useFetch from '@/components/shared/hooks/useFetch';
import { Scout } from '@/shared/types/scouts';
import FindScoutSkeleton from '@/components/shared/ui/skeletons/FindScoutSkeleton';

const Home: NextPageWithLayout = () => {
  const { data: scouts, loading } = useFetch<Scout[]>('/scouts');
  if (loading) return <FindScoutSkeleton />;

  return (
    <section>
      <h2>Lista scout</h2>
      <Filter />
      <section className={styles.scout_grid}>
        {scouts?.map((scout) => (
          <Card key={scout._id} scout={scout} />
        ))}
      </section>
    </section>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Home;
