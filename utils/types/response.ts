export interface IResponseResult<T> {
  statusCode: 200 | 204 | 400 | 404 | 500
  message: String
  data: T
}
