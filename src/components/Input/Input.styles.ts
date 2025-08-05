import styled from '@emotion/styled';
import palette from '@/styles/theme';

export const InputWrapper = styled.div`
  padding: 0 20px;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;

  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${palette.grayscale.de};
  background-color: ${palette.grayscale.white};

  outline: none;

  color: ${palette.grayscale.base};
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;

  &::placeholder {
    color: ${palette.grayscale[88]};

    font-family: 'Pretendard';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
`;
