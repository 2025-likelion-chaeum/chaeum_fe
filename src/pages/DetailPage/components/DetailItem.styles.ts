import styled from '@emotion/styled';
import palette from '@styles/theme';

export const DetailItem = styled.div`
  color: ${palette.grayscale['5e']};
  font-size: 14px;
  line-height: 140%;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const Title = styled.div`
  font-weight: 600;
  width: 102px;
`;

export const Content = styled.div`
  font-weight: 400;
  width: calc(100% - 118px);
`;
