import palette from '@/styles/theme';
import styled from '@emotion/styled';
import { motion } from 'motion/react';

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 100;
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 12px 8px 16px;
  gap: 4px;
  border-radius: 12px;
  border: 1px solid ${palette.grayscale.eb};
`;

export const Medium14 = styled.div`
  color: ${palette.grayscale.base};
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
`;

export const Semibold16 = styled.div`
  color: ${palette.grayscale.base};
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
`;

export const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: black;
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

export const SheetItem = styled.div`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${palette.grayscale.eb};
`;

export const Handle = styled.div`
  width: 80px;
  height: 4px;
  border-radius: 2px;
  background: ${palette.grayscale.de};
`;

export const SheetInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
