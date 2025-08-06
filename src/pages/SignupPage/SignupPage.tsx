import z from 'zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './SignupPage.styles';
import * as L from '@pages/LoginPage/LoginPage.styles';

import Topbar from '@components/Topbar/Topbar';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';

import { formatPhoneNumber } from '@utils/formatPhoneNumber';

const SignupPage = () => {
  const phoneRegex = /^01\d-?\d{3,4}-?\d{4}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{4,}$/;

  const navigate = useNavigate();

  const schema = z
    .object({
      name: z.string(),
      phone: z.string().regex(phoneRegex),
      email: z.string().email({ message: '이메일 형식으로 입력해주세요' }),
      password: z.string().regex(passwordRegex, { message: '영문, 숫자를 포함해 4자 이상 입력해주세요' }),
      passwordCheck: z.string(),
    })
    .refine((data) => data.password === data.passwordCheck, {
      message: '비밀번호가 일치하지 않습니다',
      path: ['passwordCheck'],
    });

  type FormFields = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, dirtyFields },
    setValue,
    watch,
    trigger,
    setError,
  } = useForm<FormFields>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      passwordCheck: '',
    },
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const watched = watch();
  const isAllFilled = Object.values(watched).every((value) => value.trim?.());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // 지우는 경우 포맷 X
    if (inputValue.length < watched.phone.length) {
      setValue('phone', inputValue, { shouldDirty: true });
      return;
    }

    // 입력 길이 늘어난 경우 포맷 O
    const formattedValue = formatPhoneNumber(inputValue);
    setValue('phone', formattedValue, { shouldDirty: true });
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const user = {
      phone: '010-0000-0000',
      email: 'a@gmail.com',
    };

    let hasError = false;

    if (data.phone === user.phone) {
      setError('phone', { message: '이미 해당 번호로 계정이 존재합니다.' });
      hasError = true;
    }

    if (data.email === user.email) {
      setError('email', { message: '이미 해당 이메일로 계정이 존재합니다.' });
      hasError = true;
    }

    if (!hasError) {
      navigate('/login');
    }
  };

  useEffect(() => {
    trigger('passwordCheck');
  }, [watched.password]);

  return (
    <S.SignupPage>
      <Topbar style={'none'} text="회원가입" />

      <S.PageContent>
        <S.FormWrapper>
          <S.Field>
            <S.Title>이름</S.Title>
            <Input mode="registered" register={register('name')} type="string" placeholder="이름" />
          </S.Field>

          <S.Field>
            <S.Title>휴대전화 번호</S.Title>
            <L.SInput
              $isError={!!errors.phone && !!(errors.phone?.type !== 'invalid_format')}
              mode="registered"
              register={register('phone', {
                onChange: handleChange,
              })}
              type="string"
              placeholder="010-0000-0000"
              inputMode="tel"
            />
            {errors.phone && errors.phone?.type !== 'invalid_format' && <S.Error>{errors.phone?.message}</S.Error>}
          </S.Field>

          <S.Field>
            <S.Title>이메일</S.Title>
            <L.SInput
              $isError={!!errors.email}
              mode="registered"
              register={register('email')}
              type="email"
              placeholder="0000@example.com"
            />
            {errors.email && <S.Error>{errors.email.message}</S.Error>}
          </S.Field>

          <S.Field>
            <S.Title>비밀번호</S.Title>
            <L.SInput
              $isError={!!errors.password}
              mode="registered"
              register={register('password')}
              type="password"
              placeholder="영문, 숫자 포함 4자 이상"
            />
            {errors.password && <S.Error>{errors.password.message}</S.Error>}
          </S.Field>

          <S.Field>
            <S.Title>비밀번호 확인</S.Title>
            <L.SInput
              $isError={!!errors.passwordCheck && !!dirtyFields.passwordCheck}
              mode="registered"
              register={register('passwordCheck')}
              type="password"
              placeholder="영문, 숫자 포함 4자 이상"
            />
            {errors.passwordCheck && dirtyFields.passwordCheck && <S.Error>{errors.passwordCheck.message}</S.Error>}
          </S.Field>
        </S.FormWrapper>

        <S.ButtonWrapper>
          <Button
            text="가입하기"
            onClick={handleSubmit(onSubmit)}
            type="submit"
            disabled={isSubmitting || !isAllFilled}
          />
        </S.ButtonWrapper>
      </S.PageContent>
    </S.SignupPage>
  );
};

export default SignupPage;
