import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  padding: 0 20px;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  background-color: ${palette.grayscale.base};

  cursor: pointer;

  color: ${palette.grayscale.white};

  font-size: 16px;
  font-weight: 600;
  line-height: normal;

  &:disabled {
    cursor: not-allowed;
    background-color: ${palette.grayscale.eb};
  }
`;
