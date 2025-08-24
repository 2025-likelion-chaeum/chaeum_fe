import type { RequestSignupDto, ResponseSignupDto } from '@/types/Signup/auth';
import { axiosInstance } from '../axios';

// 회원가입
export const postSignup = async (body: RequestSignupDto): Promise<ResponseSignupDto> => {
  const { data } = await axiosInstance.post('/register', body);

  return data;
};
