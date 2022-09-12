export interface IResponseResult<T> {
  statusCode: 200 | 204 | 400 | 404 | 500
  message: String
  data: T
}

export interface Pagination {
  page?: number
  count?: number
}

export enum DEFAULTS {
  COUNT = 10,
  PAGE = 1
}