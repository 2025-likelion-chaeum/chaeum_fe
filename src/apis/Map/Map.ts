import type { RequestMapDto, ResponseMapDto } from '@/types/Map/Map';
import { axiosInstance } from '../axios';

// 지도 필터링
export const postMap = async (body: RequestMapDto): Promise<ResponseMapDto> => {
  const { data } = await axiosInstance.post('/houses/filter', body);

  return data;
};
