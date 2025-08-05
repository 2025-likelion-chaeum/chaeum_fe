import type { UseFormRegisterReturn } from 'react-hook-form';
import * as I from './Input.styles';

/**
 * Input은 두 가지 방식으로 사용할 수 있는 input 컴포넌트입니다.
 * mode에 따라 react-hook-form의 input, 또는 일반 input으로 사용할 수 있습니다.
 *
 * @param {string} mode -- "registered" | "controlled"
 *
 * 1. mode="registered"
 * @param {string} mode - "registered"
 * @param {string} type -- input 타입
 * @param {string} placeholder -- placeholder 내용
 * @param {UseFormRegisterReturn} register -- react-hook-form의 register 반환값
 * ex) <Input mode="registered" register={register('email')} type="email" placeholder="이메일" />
 *
 * 2. mode="controlled"
 * @param {string} mode - "controlled"
 * @param {string} type -- input 타입 / 필수 X
 * @param {string} placeholder -- placeholder 내용
 * @param {string} value -- input의 value 값
 * @param {function} onChange -- input 값 변경 시 핸들러
 * @param {function} onKeyDown -- 엔터 등 키 입력 시 핸들러 / 필수 X
 * @param {number} maxLength -- input의 최대 글자 수 / 필수 X
 * @param {number} minLength -- input의 최소 글자 수 / 필수 X
 *  * controlled의 경우 input의 기본 타입은 text이며, 필요에 따라 타입을 지정할 수 있습니다.
 *  * ex) <Input
 *          mode="controlled"
 *          placeholder="금액을 작성해주세요"
 *          value={input}
 *          onChange={(e) => setInput(e.target.value)}
 *          onKeyDown={onKeyDown}
 *          maxLength={10}
 *          minLength={3}
 *        />
 *
 * 로그인, 회원가입 외에서는 mode="controlled"로 넘기면 됩니다.
 *
 * @author 김진효
 * **/

interface RegisteredInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'ref'> {
  mode: 'registered';
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

interface ControlledInputProps {
  mode: 'controlled';
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: () => void;
  maxLength?: number;
  minLength?: number;
}

type InputProps = RegisteredInputProps | ControlledInputProps;

const Input = (props: InputProps) => {
  if (props.mode === 'registered') {
    const { type, placeholder, register, ...rest } = props;
    return (
      <I.InputWrapper>
        <I.Input type={type} placeholder={placeholder} {...register} {...rest} />
      </I.InputWrapper>
    );
  } else {
    const { type = 'text', placeholder, value, onChange, onKeyDown, maxLength, minLength } = props;
    return (
      <I.InputWrapper>
        <I.Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          maxLength={maxLength}
          minLength={minLength}
        />
      </I.InputWrapper>
    );
  }
};

export default Input;
