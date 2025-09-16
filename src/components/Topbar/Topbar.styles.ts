import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const Topbar = styled.div<{ $style: string }>`
  padding: 16px;
  height: 44px;

  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;

  border-bottom: ${({ $style }) => $style === 'border' && `1px solid ${palette.grayscale.eb}`};

  background: ${({ $style }) =>
    $style === 'gradient'
      ? 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 100%)'
      : `${palette.grayscale.white}`};

  svg {
    cursor: pointer;

    color: ${({ $style }) => ($style === 'gradient' ? palette.grayscale.white : palette.grayscale.base)};
  }
  @media (min-width: 768px) {
    width: 360px;
  }
`;

export const Text = styled.p<{ $style: string }>`
  color: ${({ $style }) => ($style === 'gradient' ? palette.grayscale.white : palette.grayscale.base)};
  font-size: 18px;
  font-weight: 600;
  line-height: normal;

  flex: 1;
`;

export const Icon = styled.div`
  cursor: pointer;
`;
