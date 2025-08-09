import styled from '@emotion/styled';
import palette from '@styles/theme';

export const Button = styled.div`
  padding: 8px 16px;
  border-radius: 12px;
  border: 1px solid ${palette.grayscale.eb};

  font-size: 14px;
  font-weight: 600;
  line-height: 140%;
  color: ${palette.grayscale['5e']};
  white-space: nowrap;
`;
