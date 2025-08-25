export type CommonResponse<T> = {
  status: number;
  code: string;
  message: string;
  data: T;
};
