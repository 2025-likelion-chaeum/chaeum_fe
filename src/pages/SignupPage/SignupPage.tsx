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
import { postSignup } from '@/apis/Signup/auth';
import type { AxiosError } from 'axios';

const SignupPage = () => {
  const phoneRegex = /^01\d-?\d{3,4}-?\d{4}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{4,}$/;

  const navigate = useNavigate();

  const schema = z
    .object({
      name: z.string(),
      phoneNum: z.string().regex(phoneRegex),
      email: z.string().email({ message: '이메일 형식으로 입력해주세요' }),
      password: z.string().regex(passwordRegex, { message: '영문, 숫자를 포함해 4자 이상 입력해주세요' }),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
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
      phoneNum: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const watched = watch();
  const isAllFilled = Object.values(watched).every((value) => value.trim?.());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // 지우는 경우 포맷 X
    if (inputValue.length < watched.phoneNum.length) {
      setValue('phoneNum', inputValue, { shouldDirty: true });
      return;
    }

    // 입력 길이 늘어난 경우 포맷 O
    const formattedValue = formatPhoneNumber(inputValue);
    setValue('phoneNum', formattedValue, { shouldDirty: true });
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await postSignup(data);

      if (response.code === 'SUCCESS_REGISTER') {
        navigate('/login');
      }
    } catch (err) {
      const error = err as AxiosError<{ status: number; message: string }>;

      if (error.response?.status === 409) {
        if (error?.response.data.message.includes('이메일')) {
          setError('email', { message: '이미 해당 이메일로 계정이 존재합니다.' });
        } else {
          setError('phoneNum', { message: '이미 해당 번호로 계정이 존재합니다.' });
        }
      }
    }
  };

  useEffect(() => {
    trigger('confirmPassword');
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
              $isError={!!errors.phoneNum && !!(errors.phoneNum?.type !== 'invalid_format')}
              mode="registered"
              register={register('phoneNum', {
                onChange: handleChange,
              })}
              type="string"
              placeholder="010-0000-0000"
              inputMode="tel"
            />
            {errors.phoneNum && errors.phoneNum?.type !== 'invalid_format' && (
              <S.Error>{errors.phoneNum?.message}</S.Error>
            )}
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
              $isError={!!errors.confirmPassword && !!dirtyFields.confirmPassword}
              mode="registered"
              register={register('confirmPassword')}
              type="password"
              placeholder="영문, 숫자 포함 4자 이상"
            />
            {errors.confirmPassword && dirtyFields.confirmPassword && (
              <S.Error>{errors.confirmPassword.message}</S.Error>
            )}
          </S.Field>
        </S.FormWrapper>

        <S.ButtonWrapper>
          <Button
            text="가입하기"
            onClick={handleSubmit(onSubmit)}
            type="submit"
            disabled={isSubmitting || !isAllFilled || Object.keys(errors).length > 0}
          />
        </S.ButtonWrapper>
      </S.PageContent>
    </S.SignupPage>
  );
};

export default SignupPage;
