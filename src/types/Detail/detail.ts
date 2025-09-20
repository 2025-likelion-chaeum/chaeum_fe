import type { CommonResponse } from '../common';

export type ResponseDetailDto = CommonResponse<{
  id: number;
  source: string;
  address: string;
  dealType: string;
  saleType: string;
  imageUrls: string[];
  title: string;
  depositRent: string;
  area: string;
  currentJeonse: string;
  currentDepositRent: string;
  moveInAvailableDate: string;
  roomCount: string;
  direction: string;
  parkingSpace: string;
  heatingType: string;
  transportation: string;
  facilities: string;
  options: string;
  etc: string;
  postedOn: string;
  phoneNum: string;
  region: string;
  scrapped: boolean;
}>;

export type ResponseScrapDto = CommonResponse<{
  isSuccess: boolean;
  status: number;
  error: string;
  message: string;
}>;

export type ResponseDeleteScrapDto = CommonResponse<{
  status: number;
  code: string;
  message: string;
  data: string;
}>;
