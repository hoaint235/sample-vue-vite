
type Error = {
  errorCode: string;
  message: string;
}

export interface ApiResult<TResponse> {
  data: TResponse;
  success: boolean;
  version: string;
  errors: Error[];
}