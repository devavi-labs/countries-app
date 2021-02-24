import { SortModel } from "@material-ui/data-grid";
import { SortingQuery } from "../types/sortingQuery";

/**
 * Converts a sort model into a sorting query
 *
 * @param model {SortModel} The sort model to be converted
 *
 * @returns {SortingQuery} Returns the converted sorting query
 */
const sortModelToSortQuery = (model: SortModel): SortingQuery => {
  const fields = model?.map((item) => item.field);
  const sorts = model?.map((item) => item.sort);

  const sortQuery: SortingQuery = {};

  sortQuery.sort_rows = fields.join(",");
  sortQuery.sorting = sorts.join(",");

  return sortQuery;
};

export default sortModelToSortQuery;
