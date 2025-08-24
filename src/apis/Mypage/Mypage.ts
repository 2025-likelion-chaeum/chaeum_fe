import type { ResponseLogoutDto, ResponseMypageDto } from '@/types/Mypage/Mypage';
import { axiosInstance } from '../axios';

// 마이페이지
export const getMypage = async (): Promise<ResponseMypageDto> => {
  const { data } = await axiosInstance.get('/user/mypage');

  return data;
};

// 로그아웃
export const postLogout = async (): Promise<ResponseLogoutDto> => {
  const { data } = await axiosInstance.post('/logout');

  return data;
};
