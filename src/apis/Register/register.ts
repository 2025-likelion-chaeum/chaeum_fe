import { axiosInstance } from '../axios';
import type { RequestRegisterDto, ResponseRegisterDto } from '@/types/Register/register';

export const RegisterHome = async (body: RequestRegisterDto): Promise<ResponseRegisterDto> => {
  const { data } = await axiosInstance.post('/house/new', body);

  return data;
};
