import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import HomeLayout from '@/layouts/HomeLayout';
import { lazyRoutes } from './routes';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <lazyRoutes.MainPage />,
      },
      { path: 'login', element: <lazyRoutes.LoginPage /> },
      { path: 'signup', element: <lazyRoutes.SignupPage /> },
      { path: 'onboarding', element: <lazyRoutes.OnboardingPage /> },
      { path: 'map', element: <lazyRoutes.MapPage /> },
      { path: 'list', element: <lazyRoutes.ListPage /> },
      { path: 'list/:id', element: <lazyRoutes.DetailPage /> },
      { path: 'upload', element: <lazyRoutes.UploadPage /> },
      { path: 'mypage', element: <lazyRoutes.MyPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
