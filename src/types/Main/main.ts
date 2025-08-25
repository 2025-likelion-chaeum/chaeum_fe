import type { CommonResponse } from '../common';

export type ResponseMainDto = CommonResponse<{
  purpose: string;
  recommended: {
    id: number;
    source: string;
    region: string;
    title: string;
    address: string;
    saleType: string;
    dealType: string;
    depositRent: string;
    area: string;
    imageUrls: string;
    postedOn: string;
  }[];
  hot: {
    id: number;
    source: string;
    region: string;
    title: string;
    address: string;
    saleType: string;
    dealType: string;
    depositRent: string;
    area: string;
    imageUrls: string;
    postedOn: string;
  }[];
}>;
