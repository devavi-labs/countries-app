import { SortModel, SortDirection } from "@material-ui/data-grid";
import { SortingQuery } from "../types/sortingQuery";

const sortQueryToSortModel = (query: SortingQuery) => {
  const fields = query.sort_rows?.split(",");
  const sorts = query.sorting?.split(",");

  const sortModel: SortModel = [];

  if (fields && sorts) {
    fields.forEach((field, i) => {
      const sortItem = { field, sort: sorts[i] as SortDirection };
      sortModel.push(sortItem);
    });
  }

  return sortModel;
};

export default sortQueryToSortModel;
