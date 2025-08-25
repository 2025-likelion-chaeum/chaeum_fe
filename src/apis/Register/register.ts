import { axiosInstance } from '../axios';
import type { RequestRegisterDto, ResponseRegisterDto } from '@/types/Register/register';
import type { RequestRegisterImagesDto } from '@/types/Register/registerImage';

export const RegisterHome = async (
  formData: RequestRegisterDto,
  formDataImages: RequestRegisterImagesDto,
): Promise<ResponseRegisterDto> => {
  const real_formData = new FormData();

  formDataImages.images.forEach((image) => {
    real_formData.append('images', image);
  });

  const formDataString = JSON.stringify(formData);
  real_formData.append('house', new Blob([formDataString], { type: 'application/json' }));

  const { data } = await axiosInstance.post('/house/new', real_formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return data;
};
