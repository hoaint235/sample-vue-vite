import axios from "axios";
import { ApiResult } from '@models';

export default class BaseService {

  protected get = <TResponse>(url: string) => axios.get<any, ApiResult<TResponse>>(url);

  protected post = <TRequest, TResponse>(url: string, payload: TRequest) => axios.post<TRequest, ApiResult<TResponse>>(url, payload);

  protected put = <TRequest, TResponse>(url: string, payload: TRequest) => axios.put<any, ApiResult<TResponse>>(url, payload);

  protected del = <TResponse>(url: string) => axios.delete<any, ApiResult<TResponse>>(url);
}