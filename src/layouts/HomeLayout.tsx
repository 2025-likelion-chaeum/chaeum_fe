import TabBar from '@/components/TabBar/TabBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <TabBar />
    </>
  );
};

export default HomeLayout;
