import { axiosInstance } from '../axios';
import type { RequestRegisterDto, ResponseRegisterDto } from '@/types/Register/register';

export const RegisterHome = async (formData: RequestRegisterDto): Promise<ResponseRegisterDto> => {
  const { data } = await axiosInstance.post('/house/new', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return data;
};
