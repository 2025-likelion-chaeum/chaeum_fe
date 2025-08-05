import { matchPath, NavLink, useLocation } from 'react-router-dom';

import * as T from './Navbar.styles';

import HomeOff from '@assets/icon-home-off.svg?react';
import HomeOn from '@assets/icon-home-on.svg?react';
import MapOn from '@assets/icon-map-on.svg?react';
import MapOff from '@assets/icon-map-off.svg?react';
import Create from '@assets/icon-create.svg?react';
import MyPageOn from '@assets/icon-mypage-on.svg?react';
import MyPageOff from '@assets/icon-mypage-off.svg?react';

const Navbar = () => {
  const LINKS = [
    {
      to: '/',
      label: '홈',
      offIcon: <HomeOff />,
      onIcon: <HomeOn />,
    },
    {
      to: '/map',
      label: '지도',
      offIcon: <MapOff />,
      onIcon: <MapOn />,
    },
    {
      to: '/upload',
      label: '등록',
      offIcon: <Create />,
      onIcon: <></>,
    },
    {
      to: '/mypage',
      label: '내정보',
      offIcon: <MyPageOff />,
      onIcon: <MyPageOn />,
    },
  ];

  const location = useLocation();

  const HIDDEN_ROUTES = ['/login', '/signup', '/onboarding', '/list', '/list/:id', '/upload', '/mypage/account'];
  const isHideNavbar = HIDDEN_ROUTES.some((route) => matchPath(route, location.pathname));

  if (isHideNavbar) return null;

  return (
    <T.TabBar>
      <T.MenuContainer>
        {LINKS.map((link, idx) => (
          <NavLink
            to={link.to}
            key={idx}
            children={({ isActive }) => (
              <T.Menu>
                {isActive ? link.onIcon : link.offIcon}
                <T.Item $isActive={isActive}>{link.label}</T.Item>
              </T.Menu>
            )}></NavLink>
        ))}
      </T.MenuContainer>
    </T.TabBar>
  );
};

export default Navbar;
