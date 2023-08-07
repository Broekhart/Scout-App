import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import DashboardLayout from '@/layouts/DashboardLayout';

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <p>Home</p>
    </section>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Home;
