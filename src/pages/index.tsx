import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import DashboardLayout from '@/layouts/DashboardLayout';
import Filter from '@/components/findScout/Filter';
import Card from '@/components/findScout/Card';
import styles from '@/styles/findScout/Home.module.css';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <h2>Lista scout</h2>
      <Filter />
      <section className={styles.scout_grid}>
        <Card />
      </section>
    </section>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Home;
