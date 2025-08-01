import React from 'react';

export const lazyRoutes = {
  LoginPage: React.lazy(() => import('../pages/LoginPage/LoginPage')),
  SignupPage: React.lazy(() => import('../pages/SignupPage/SignupPage')),
  OnboardingPage: React.lazy(() => import('../pages/OnboardingPage/OnboardingPage')),
  MainPage: React.lazy(() => import('../pages/MainPage/MainPage')),
  MapPage: React.lazy(() => import('../pages/MapPage/MapPage')),
  ListPage: React.lazy(() => import('../pages/ListPage/ListPage')),
  DetailPage: React.lazy(() => import('../pages/DetailPage/DetailPage')),
  UploadPage: React.lazy(() => import('../pages/UploadPage/UploadPage')),
  MyPage: React.lazy(() => import('../pages/MyPage/MyPage')),
};
