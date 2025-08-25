import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import * as C from '@styles/common';
import Navbar from '@/components/Navbar/Navbar';
import ScrollToTop from '@/utils/scrollToTop';

const HomeLayout = () => {
  return (
    <>
      <ScrollToTop />

      <C.Page id="page-root">
        <Suspense fallback={null}>
          <C.OuletWrapper>
            <Outlet />
          </C.OuletWrapper>
        </Suspense>
        <Navbar />
      </C.Page>
    </>
  );
};

export default HomeLayout;
