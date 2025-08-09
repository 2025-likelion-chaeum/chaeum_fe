import styled from '@emotion/styled';
import palette from '@styles/theme';

export const RecommandBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 192px;
  border-radius: 12px;
  border: 1px solid ${palette.grayscale.eb};
`;

export const Img = styled.img`
  height: 160px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
`;

export const Regular12 = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${palette.grayscale['5e']};
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
`;

export const Semibold12 = styled.div`
  overflow: hidden;
  color: ${palette.grayscale.base};
  text-overflow: ellipsis;

  font-size: 14px;
  font-weight: 600;
  line-height: 140%;
`;

export const Medium10 = styled.div`
  overflow: hidden;
  color: ${palette.grayscale['5e']};
  text-overflow: ellipsis;

  font-size: 10px;
  font-weight: 500;
  line-height: 140%;
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-top: 4px;
`;

export const Tag = styled.div`
  color: ${palette.grayscale.white};
  font-size: 10px;
  font-weight: 500;
  line-height: 140%;

  padding: 2px 6px;
  border-radius: 4px;
  background-color: ${palette.grayscale['5e']};
`;
