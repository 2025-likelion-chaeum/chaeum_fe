import styled from '@emotion/styled';
import palette from '@styles/theme';

export const MyPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 28px 16px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Menu = styled.h2`
  color: ${palette.grayscale.base};

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

export const Wrapper = styled.div<{ $pTop: number; $gap?: boolean; $height?: number }>`
  border-radius: 12px;
  border: 1px solid ${palette.grayscale.eb};
  background-color: ${palette.grayscale.white};

  display: flex;
  gap: ${({ $gap }) => $gap && '8px'};
  justify-content: ${({ $gap }) => !$gap && 'space-between'};
  align-items: center;

  padding: ${({ $pTop }) => ($pTop === 16 ? '16px 12px' : '12px 16px')};

  height: ${({ $height }) => $height && `${$height}px`};

  cursor: pointer;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

export const SemiBold = styled.p`
  color: ${palette.grayscale.base};

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Email = styled.p`
  color: ${palette.grayscale[88]};

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
