export type CommonResponse<T> = {
  status: number;
  code: string;
  message: string;
  data: T;
};

export const DealTypeMap = {
  매매: 'SALE',
  임대: 'RENTAL',
  전세: 'JEONSE',
  월세: 'MONTHLYRENT',
  단기: 'SHORTTERM',
} as const;

export type DealTypeKo = keyof typeof DealTypeMap;
export type DealTypeEn = (typeof DealTypeMap)[DealTypeKo];

export const SaleTypeMap = {
  시골농가주택: 'RURAL_FARM_HOUSE',
  전원주택: 'COUNTRY_HOUSE',
  조립식주택: 'PREFAB_HOUSE',
  '토지/임야': 'LAND',
  '아파트/빌라': 'APARTMENT_VILLA',
  '과수원/농장': 'ORCHARD_FARM',
  '민박펜션/체험농장': 'GUESTHOUSE_FARMSTAY',
  '공장/창고': 'FACTORY_WAREHOUSE',
} as const;

export type SaleTypeKo = keyof typeof SaleTypeMap;
export type SaleTypeEn = (typeof SaleTypeMap)[SaleTypeKo];

export const convertDealType = (ko: DealTypeKo): DealTypeEn => DealTypeMap[ko];
export const convertSaleType = (ko: SaleTypeKo): SaleTypeEn => SaleTypeMap[ko];

export const reverseDealType = (en: DealTypeEn): DealTypeKo => {
  const entry = Object.entries(DealTypeMap).find(([_, val]) => val === en);
  return entry ? (entry[0] as DealTypeKo) : ('' as DealTypeKo);
};

export const reverseSaleType = (en: SaleTypeEn): SaleTypeKo => {
  const entry = Object.entries(SaleTypeMap).find(([_, val]) => val === en);
  return entry ? (entry[0] as SaleTypeKo) : ('' as SaleTypeKo);
};
