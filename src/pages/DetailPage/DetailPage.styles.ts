import styled from '@emotion/styled';
import palette from '@styles/theme';
import { motion } from 'motion/react';

export const DetailPage = styled.div`
  width: 100%;
`;

export const TopbarContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1000;
`;
export const Image = styled.img`
  height: 240px;
  width: 100%;
  object-fit: cover;
  position: relative;
  bottom: 44px;
`;

export const Sheet = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  border-radius: 16px 16px 0 0;
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SheetScroll = styled.div`
  height: calc(100dvh - 204px);
  overflow: scroll;
`;

export const SheetContent = styled.div<{ scrollable: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: ${({ scrollable }) => (scrollable ? 'auto' : 'clip')};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Semibold16 = styled.div`
  color: ${palette.grayscale.base};
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
`;

export const Regular12 = styled.div`
  color: ${palette.grayscale.a4};
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
`;

export const Medium14 = styled.div`
  color: ${palette.grayscale['5e']};
  font-size: 12px;
  font-weight: 500;
  line-height: 140%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding-top: 20px;
  border-top: 1px solid ${palette.grayscale.eb};
`;

export const Semibold14 = styled.div`
  color: ${palette.grayscale.base};
  font-size: 14px;
  font-weight: 600;
  line-height: 140%;
`;

export const Regular14 = styled.div`
  color: ${palette.grayscale['5e']};
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
`;
