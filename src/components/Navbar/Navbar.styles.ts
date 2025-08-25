import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const TabBar = styled.div`
  height: 56px;
  border-radius: 20px 20px 0 0;
  border: 1px solid ${palette.grayscale.eb};
  background-color: ${palette.grayscale.white};

  position: sticky;
  z-index: 100;
  bottom: 0;

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MenuContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.p<{ $isActive: boolean }>`
  color: ${({ $isActive }) => ($isActive ? palette.grayscale.base : palette.grayscale.a4)};
  font-size: 10px;
  font-weight: 500;
  line-height: 140%;
`;
