import type { ResponseDetailDto, ResponseScrapDto, ResponseDeleteScrapDto } from '@/types/Detail/detail';
import { axiosInstance } from '../axios';

export const getDetail = async (houseId: number): Promise<ResponseDetailDto> => {
  const { data } = await axiosInstance.get(`/house/${houseId}`);
  return data;
};

export const scrap = async (houseId: number): Promise<ResponseScrapDto> => {
  const { data } = await axiosInstance.post(`/house/scrap/${houseId}`);
  return data;
};

export const deleteScrap = async (houseId: number): Promise<ResponseDeleteScrapDto> => {
  const { data } = await axiosInstance.delete(`/house/scrap/${houseId}`);
  return data;
};
