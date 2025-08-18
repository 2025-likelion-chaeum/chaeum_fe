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
