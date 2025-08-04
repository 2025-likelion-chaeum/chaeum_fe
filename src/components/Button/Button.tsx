import * as B from './Button.styles';

/**
 * Button은 가장 기본적으로 사용되는 버튼 컴포넌트입니다.
 *
 * @param {string} text -- 버튼 내용
 * @param {function} onClick -- 버튼 클릭 시 실행될 함수
 * @param {string} type -- 버튼의 타입
 * @param {boolean} disabled -- 버튼 비활성화 여부
 *
 * ex) <Button text="로그인" onClick={handleSubmit(onSubmit)} type="submit" disabled={isSubmitting} />
 *
 * 버튼의 기본 타입은 button이며, 필요에 따라 타입을 지정할 수 있습니다.
 *
 * @author 김진효
 * **/

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: 'submit' | 'button';
  disabled?: boolean;
}

const Button = ({ text, onClick, type = 'button', disabled }: ButtonProps) => {
  return (
    <B.ButtonWrapper>
      <B.Button onClick={onClick} type={type} disabled={disabled}>
        {text}
      </B.Button>
    </B.ButtonWrapper>
  );
};

export default Button;
