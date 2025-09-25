import styled from '@emotion/styled';
import palette from '@styles/theme';

export const ListPage = styled.div`
  margin: 16px;
  width: calc(100% - 32px);

  display: flex;
  flex-direction: column;
  gap: 28px;

  overflow-y: hidden;
`;

export const HomeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DropdownContaioner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
export const Medium14 = styled.div`
  color: ${palette.grayscale[88]};
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
`;

export const NoneDataInfo = styled.div`
  height: calc(100dvh - 145px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
