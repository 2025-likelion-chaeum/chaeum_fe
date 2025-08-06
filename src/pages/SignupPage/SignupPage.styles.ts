import styled from '@emotion/styled';
import palette from '@styles/theme';

export const SignupPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageContent = styled.div`
  height: calc(100dvh - 44px);

  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding-top: 16px;

  flex: 1;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.p`
  color: ${palette.grayscale.base};

  font-size: 14px;
  font-weight: 600;
  line-height: 140%;

  margin-left: 20px;
`;

export const ButtonWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin-bottom: 16px;
`;

export const Error = styled.div`
  margin-top: -4px;

  color: ${palette.system.error};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  padding-left: 20px;
`;
