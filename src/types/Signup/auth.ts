import type { CommonResponse } from '../common';

// 회원가입
export type RequestSignupDto = {
  name: string;
  phoneNum: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type ResponseSignupDto = CommonResponse<{
  name: string;
  phoneNum: string;
  email: string;
  password: string;
  confirmPassword: string;
}>;
