import styled from '@emotion/styled';
import palette from '@styles/theme';

export const MainPage = styled.div`
  margin: 28px 16px;
  width: calc(100% - 32px);

  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const Semibold18 = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${palette.grayscale.base};
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Region = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  width: 100%;
  overflow: scroll;
`;

export const ReccomandList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  width: 100%;
  overflow: scroll;
`;
