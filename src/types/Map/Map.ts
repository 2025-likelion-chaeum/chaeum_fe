import type { CommonResponse } from '../common';

export type RequestMapDto = {
  region: null | string;
  saleTypes: string[];
  dealTypes: string[];
  priceTypes: string[];
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
  imageUrls: string[] | null;
  thumbnailUrl: string | null;
  postedOn: string;
};

export type ResponseMapDto = CommonResponse<House[]>;
