import type { CommonResponse } from '../common';

// 지도 필터링
export type PriceRange = {
  min: number;
  max: number;
};

export type RequestMapDto = {
  region: null | string;
  saleTypes: string[];
  dealTypes: string[];
  priceRanges: PriceRange[];
  userOnly: boolean;
  page: number;
  size: number;
};

export type House = {
  id: number;
  source: string;
  region: string;
  title: string | null;
  address: string;
  saleType: string;
  dealType: string | null;
  depositRent: string | null;
  area: string | null;
  imageUrls: string[];
  postedOn: string;
};

export type ResponseMapDto = CommonResponse<House[]>;
