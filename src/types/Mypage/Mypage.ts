import type { CommonResponse } from '../common';

// 마이페이지
export type ResponseMypageDto = CommonResponse<{
  id: number;
  name: string;
  phoneNum: string;
  email: string;
}>;

// 로그아웃
export type ResponseLogoutDto = CommonResponse<null>;
