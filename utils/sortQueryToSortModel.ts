import { SortModel, SortDirection } from "@material-ui/data-grid";
import { SortingQuery } from "../types/sortingQuery";

/**
 * Converts a sorting query into a sort model
 *
 * @param query {SortingQuery} The sorting query to be converted
 *
 * @returns {SortModel} Returns the converted sort model
 */
const sortQueryToSortModel = (query: SortingQuery): SortModel => {
  const fields = query.sort_rows?.split(",");
  const sorts = query.sorting?.split(",");

  const sortModel: SortModel = [];

  if (fields && sorts) {
    fields.forEach((field, i) => {
      if (field.length > 0 && sorts[i].length > 0) {
        const sortItem = { field, sort: sorts[i] as SortDirection };
        sortModel.push(sortItem);
      }
    });
  }

  return sortModel;
};

export default sortQueryToSortModel;
