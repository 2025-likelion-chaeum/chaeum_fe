import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const MyAccountPage = styled.div`
  display: flex;
  flex-direction: column;

  height: calc(100dvh - 44px);
`;

export const AccountWrapper = styled.div`
  padding: 12px 16px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;

  border-radius: 16px;
  border: 1px solid ${palette.grayscale.eb};
  background-color: ${palette.grayscale.white};
`;

export const Menu = styled.div<{ $idx: number }>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding-top: ${({ $idx }) => $idx !== 0 && '12px'};
  border-top: ${({ $idx }) => $idx !== 0 && `1px solid ${palette.grayscale.eb}`};
`;

export const Label = styled.p`
  color: ${palette.grayscale.base};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;

export const Content = styled.p`
  color: ${palette.grayscale[88]};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  padding: 0 16px;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin-bottom: 16px;
`;

export const Button = styled.button`
  width: 100%;

  border-radius: 12px;
  border: 1px solid ${palette.grayscale.eb};
  background-color: ${palette.grayscale.white};

  padding: 12px;

  color: ${palette.grayscale[88]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
