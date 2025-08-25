import type { CommonResponse, DealTypeEn, SaleTypeEn } from '../common';

export type RequestRegisterDto = {
  address: string;
  dealType: DealTypeEn;
  saleType: SaleTypeEn;
  imageUrls: string[];
  title: string;
  depositRent: string;
  area: string;
  currentJeonse?: string | null;
  currentDepositRent?: string | null;
  moveInAvailableDate?: string | null;
  roomCount?: string | null;
  direction?: string | null;
  parkingSpace?: string | null;
  heatingType?: string | null;
  transportation?: string | null;
  facilities?: string | null;
  options?: string | null;
  etc?: string | null;
};

export type ResponseRegisterDto = CommonResponse<{
  id: string;
  address: string;
  dealType: DealTypeEn;
  saleType: SaleTypeEn;
  imageUrls: string[];
  title: string;
  depositRent: string;
  area: string;
  currentJeonse: string | null;
  currentDepositRent: string | null;
  moveInAvailableDate: string | null;
  roomCount: string | null;
  direction: string | null;
  parkingSpace: string | null;
  heatingType: string | null;
  transportation: string | null;
  facilities: string | null;
  options: string | null;
  etc: string | null;
}>;
