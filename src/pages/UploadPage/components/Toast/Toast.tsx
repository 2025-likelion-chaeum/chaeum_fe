import { useEffect } from 'react';
import * as T from './Toast.styles';

type ToastProps = {
  message: string;
  onClose: () => void;
};

const Toast = ({ message, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000); // 2초 뒤 자동 닫힘
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <T.Wrapper>
      <T.Message>{message}</T.Message>
    </T.Wrapper>
  );
};

export default Toast;
