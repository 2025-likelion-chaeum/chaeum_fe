import type { RequestMapDto, ResponseMapDto } from '@/types/Map/Map';
import { axiosInstance } from '../axios';

// 지도 필터링
export const postMap = async (body: RequestMapDto): Promise<ResponseMapDto> => {
  const { data } = await axiosInstance.post('/houses/filter', body);

  return data;
};

export const getMyHouse = async (): Promise<ResponseMapDto> => {
  const { data } = await axiosInstance.get('/user/myhouse');
  return data;
};

export const getMyScrap = async (): Promise<ResponseMapDto> => {
  const { data } = await axiosInstance.get('/user/myscrap');
  return data;
};
