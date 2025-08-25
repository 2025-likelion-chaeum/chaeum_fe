import type { RequestLoginDto, RequestSignupDto, ResponseLoginDto, ResponseSignupDto } from '@/types/Signup/auth';
import { axiosInstance } from '../axios';

// 회원가입
export const postSignup = async (body: RequestSignupDto): Promise<ResponseSignupDto> => {
  const { data } = await axiosInstance.post('/register', body);

  return data;
};

// 로그인
export const postLogin = async (body: RequestLoginDto): Promise<ResponseLoginDto> => {
  const { data } = await axiosInstance.post('/login', body);

  return data;
};
