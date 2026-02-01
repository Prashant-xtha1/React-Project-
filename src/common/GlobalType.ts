export interface IImage {
  publicId: string,
  url: string,
  optimizedUrl: string
}

export interface IPagination {
  limit: number,
  page: number,
  total: number,
  totalNoOfPages: number,
}

export interface IResponse<T> {
  data: Array<T>, 
  status: string,
  message: string,  
  meta: {
    pagination: IPagination
  }
}