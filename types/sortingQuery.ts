/**
 * @type {SortingQuery} Type for sorting query
 */
export type SortingQuery = {
  /** Rows to be sorted separated with commas*/
  sort_rows?: string;

  /** Sorting (ASC or DESC) in the same order as rows separated with commas*/
  sorting?: string;
};
