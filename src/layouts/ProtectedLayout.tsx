import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import * as C from '@styles/common';
import Navbar from '@/components/Navbar/Navbar';
import ScrollToTop from '@/utils/scrollToTop';
import { useAuth } from '@/context/AuthContext';

const ProtectedLayout = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={'login'} replace />;
  }

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

export default ProtectedLayout;
