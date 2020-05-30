export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

// generic type because pagination will be used for different types
export class PaginatedResult<T> {

  results: T;
  pagination: Pagination;
}
