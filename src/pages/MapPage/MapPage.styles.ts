import styled from '@emotion/styled';
// import palette from '@styles/theme';

export const MapPage = styled.div`
  width: 100%;
  height: 100dvh;

  position: relative;
`;

export const HomeItemContainer = styled.div`
  z-index: 100;
  bottom: 76px;
  position: absolute;
  padding: 0px 20px;
  width: 100%;

  @media (min-width: 768px) {
    width: 360px;
  }
`;

export const DropdownContaioner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  position: absolute;
  z-index: 101;
  top: 16px;
  left: 16px;
`;
