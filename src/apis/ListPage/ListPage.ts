import type { RequestListDto, ResponseListDto } from '@/types/HomeList/list';
import { axiosInstance } from '../axios';

export const getList = async (body: RequestListDto): Promise<ResponseListDto> => {
  const { data } = await axiosInstance.post('/houses/filter', body);

  return data;
};
