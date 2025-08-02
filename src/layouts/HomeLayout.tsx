import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import TabBar from '@components/TabBar/TabBar';
import * as C from '@styles/common';

const HomeLayout = () => {
  return (
    <C.Page>
      <Suspense fallback={null}>
        <C.OuletWrapper>
          <Outlet />
        </C.OuletWrapper>
      </Suspense>
      <TabBar />
    </C.Page>
  );
};

export default HomeLayout;
