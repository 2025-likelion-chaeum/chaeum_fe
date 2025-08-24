import type { CommonResponse } from '../common';

// 온보딩
export type RequestOnboardingDto = {
  email: string;
  purpose: 'BUY' | 'SELL' | 'BOTH';
  usagePurpose: string[];
  additionalDetail?: string;
  usagePurposeEtcDetail?: string;
};

export type ResponseOnboardingDto = CommonResponse<{
  email: string;
  purpose: string;
  usagePurpose: string[];
  additionalDetail: string;
}>;
