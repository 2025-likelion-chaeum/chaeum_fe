import type { ResponseDetailDto } from '@/types/Detail/detail';
import { axiosInstance } from '../axios';

export const getDetail = async (houseId: number): Promise<ResponseDetailDto> => {
  const { data } = await axiosInstance.get(`/house/${houseId}`);

  return data;
};
