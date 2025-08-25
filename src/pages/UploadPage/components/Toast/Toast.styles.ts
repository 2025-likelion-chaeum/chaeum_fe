import palette from '@/styles/theme';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.72);
  padding: 16px 24px;
  border-radius: 8px;
  z-index: 9999;
  animation: fadeInUp 0.3s ease;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate(-50%, 20px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }
`;

export const Message = styled.div`
  color: ${palette.grayscale.white};

  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
`;
