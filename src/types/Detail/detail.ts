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
}>;
