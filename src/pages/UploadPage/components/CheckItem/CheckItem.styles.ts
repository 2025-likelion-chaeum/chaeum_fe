import styled from '@emotion/styled';
import palette from '@styles/theme';

export const CheckItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin: 6px 0;
`;

export const Text = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 140%;
  color: ${palette.grayscale.base};
`;
