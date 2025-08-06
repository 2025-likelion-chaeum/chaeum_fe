import z from 'zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

import * as L from './LoginPage.styles';
import Logo from '@assets/logo.svg';
import Button from '@components/Button/Button';

const LoginPage = () => {
  const schema = z.object({
    email: z.string(),
    password: z.string(),
  });

  type FormFields = z.infer<typeof schema>;

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm<FormFields>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const user = {
      email: 'a@gmail.com',
      password: '123a',
    };

    const isValidUser = data.email === user.email && data.password === user.password;

    if (!isValidUser) {
      setError('email', { message: undefined });
      setError('password', {
        message: '이메일 또는 비밀번호가 일치하지 않습니다.',
      });

      return;
    }

    navigate('/onboarding');
  };

  return (
    <L.LoginPage>
      <L.Logo>
        <img src={Logo} alt="채움 로고" />
        <p>채움, 비어있는 공간에 가치를 더하다</p>
      </L.Logo>

      <L.Form>
        <L.InputWrapper>
          <L.SInput
            $isError={!!errors.email}
            mode="registered"
            register={register('email')}
            onFocus={() => clearErrors(['email', 'password'])}
            type="email"
            placeholder="이메일"
          />
          <L.SInput
            $isError={!!errors.password}
            mode="registered"
            register={register('password')}
            onFocus={() => clearErrors(['email', 'password'])}
            type="password"
            placeholder="비밀번호"
          />

          {errors.password && <L.Error>{errors.password.message}</L.Error>}
        </L.InputWrapper>

        <Button text="로그인" onClick={handleSubmit(onSubmit)} type="submit" disabled={isSubmitting} />
        <L.NavigateWrapper>
          <L.Navigate to={'/signup'}>회원가입하기</L.Navigate>
        </L.NavigateWrapper>
      </L.Form>
    </L.LoginPage>
  );
};

export default LoginPage;
