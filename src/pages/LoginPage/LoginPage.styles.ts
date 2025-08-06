import Input from '@/components/Input/Input';
import palette from '@/styles/theme';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
// import palette from '@styles/theme';

export const LoginPage = styled.div`
  height: 100dvh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  margin-top: 150px;

  img {
    width: 95px;
  }

  p {
    color: ${palette.grayscale[88]};
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
  }
`;

export const Form = styled.div`
  width: 100%;
  min-height: 235.5px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NavigateWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Navigate = styled(Link)`
  color: ${palette.grayscale[88]};
  font-size: 12px;
  font-weight: 500;
  line-height: 140%;

  border-bottom: 1px solid ${palette.grayscale[88]};
`;

export const Error = styled.div`
  margin-top: -8px;
  padding-left: 20px;

  color: ${palette.system.error};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export const SInput = styled(Input)<{ $isError: boolean }>`
  border: ${({ $isError }) => ($isError ? `1px solid ${palette.system.error}` : `1px solid ${palette.grayscale.de}`)};
`;
