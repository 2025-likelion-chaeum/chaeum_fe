import type { CommonResponse, DealTypeEn, SaleTypeEn } from '../common';

export type RequestListDto = {
  region: string;
  saleTypes: SaleTypeEn[];
  dealTypes: DealTypeEn[];
  priceRanges: string[];
  userOnly: false;
  page: number;
  size: number;
};

export type ResponseListDto = CommonResponse<{
  id: number;
  source: string;
  region: string;
  title: string;
  address: string;
  saleType: SaleTypeEn;
  dealType: DealTypeEn;
  depositRent: string;
  area: string;
  imageUrls: [];
  postedOn: string;
}>;
