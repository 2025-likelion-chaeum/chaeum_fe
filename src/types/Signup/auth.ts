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

// 로그인
export type RequestLoginDto = {
  email: string;
  password: string;
};

export type ResponseLoginDto = CommonResponse<{
  email: string;
  password: string;
  isFirstLogin: boolean;
}>;
