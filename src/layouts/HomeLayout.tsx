import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import * as C from '@styles/common';
import Navbar from '@/components/Navbar/Navbar';

const HomeLayout = () => {
  return (
    <C.Page>
      <Suspense fallback={null}>
        <C.OuletWrapper>
          <Outlet />
        </C.OuletWrapper>
      </Suspense>
      <Navbar />
    </C.Page>
  );
};

export default HomeLayout;
