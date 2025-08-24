import styled from '@emotion/styled';
import palette from '@styles/theme';

export const UploadPage = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: calc(100% - 32px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 12px 16px;
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

  margin: 16px;
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

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 360px;
  }
`;

export const StateContent = styled.div`
  flex: 1;
`;

export const PhotoGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  overflow-x: scroll;
  height: 135px;
  align-items: end;
`;

export const UploadPhoto = styled.label`
  display: flex;
  width: 120px;
  height: 120px;
  padding: 48px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid ${palette.grayscale.de};
  position: relative;
  bottom: 2px;
`;

export const Photo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  object-fit: cover;
`;

export const RemovePhoto = styled.img`
  position: absolute;
  top: -10px;
  right: -8px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const PhotoWrapper = styled.div`
  position: relative;
  display: inline-block;
`;
