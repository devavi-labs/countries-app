/**
 * @type {SearchQuery} Type for search filters
 */
export type SearchQuery = {
  /** The value to be searched */
  q?: string;

  /** Name of the column the value is to be searched in */
  qf?: string;
};
