import type { RequestOnboardingDto, ResponseOnboardingDto } from '@/types/Onboarding/onboarding';
import { axiosInstance } from '../axios';

// 온보딩
export const postOnboarding = async (body: RequestOnboardingDto): Promise<ResponseOnboardingDto> => {
  const { data } = await axiosInstance.post('/onboarding', body);

  return data;
};
