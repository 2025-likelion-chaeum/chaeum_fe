import styled from '@emotion/styled';
import palette from '@styles/theme';

export const OnboardingPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  height: calc(100dvh - 44px);
  padding-top: 16px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  gap: 12px;
`;

export const Title = styled.h1`
  color: ${palette.grayscale.base};

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Explain = styled.p`
  color: ${palette.grayscale[88]};

  font-size: 12px;
  font-weight: 500;
  line-height: 140%;

  margin-top: -8px;
`;

export const Label = styled.label`
  color: ${palette.grayscale.base};

  font-size: 14px;
  font-weight: 600;
  line-height: 140%;

  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RadioInput = styled.input`
  appearance: none;
  outline: none;
  margin: 0;

  width: 20px;
  height: 20px;
  border: 1.5px solid ${palette.grayscale.de};
  border-radius: 50%;

  &:checked {
    content: '';

    background-color: ${palette.grayscale.base};
    border: 2.5px solid ${palette.grayscale.white};
    box-shadow: 0 0 0 1.5px ${palette.grayscale.base};
  }
`;

export const EtcWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UserInput = styled.textarea<{ $margin?: number; $height?: number }>`
  border-radius: 8px;
  border: 1px solid ${palette.grayscale.de};
  background-color: ${palette.grayscale.white};

  padding: 12px 16px;

  color: ${palette.grayscale.base};

  font-size: 14px;
  font-weight: 500;
  line-height: 140%;

  outline: none;

  margin-left: ${({ $margin }) => ($margin ? `${$margin}px` : 0)};

  height: ${({ $height }) => ($height ? `${$height}px` : '44px')};

  resize: none;

  &::placeholder {
    color: ${palette.grayscale[88]};
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    text-align: start;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  flex: 1;
  margin-bottom: 16px;
`;
