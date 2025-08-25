import type { ResponseMainDto } from '@/types/Main/main';
import { axiosInstance } from '../axios';

export const getMain = async (): Promise<ResponseMainDto> => {
  const { data } = await axiosInstance.get(`/main`);
  return data;
};
