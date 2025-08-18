import styled from '@emotion/styled';
import palette from '@styles/theme';

export const UploadPage = styled.div`
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  margin: 16px;
  gap: 20px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProgressBarWrapper = styled.div`
  width: 90%;
  height: 6px;
  background-color: ${palette.grayscale.eb};
  border-radius: 4px;
`;

export const Progress = styled.div<{ progress: number }>`
  background-color: ${palette.grayscale.base};
  width: ${(props) => props.progress + '%'};
  height: 100%;
  border-radius: 4px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Bold18 = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${palette.grayscale.base};
`;

export const Medium12 = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 140%;
  color: ${palette.grayscale['88']};
`;

export const Semibold16 = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${palette.grayscale.base};
`;

export const AddressInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${palette.grayscale.de};
`;

export const Medium14 = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
  color: ${palette.grayscale['88']};
`;
