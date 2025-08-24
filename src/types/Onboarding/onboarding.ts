import type { CommonResponse } from '../common';

// 온보딩
export type RequestOnboardingDto = {
  email: string;
  purpose: string;
  usagePurpose: string[];
  additionalDetail: string;
};

export type ResponseOnboardingDto = CommonResponse<{
  email: string;
  purpose: string;
  usagePurpose: string[];
  additionalDetail: string;
}>;
