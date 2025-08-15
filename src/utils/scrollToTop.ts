import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, key } = useLocation();

  const page = document.getElementById('page-root');
  page?.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    page?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname, key]);

  return null;
};

export default ScrollToTop;
