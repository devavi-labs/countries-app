import { SortModel } from "@material-ui/data-grid";
import { SortingQuery } from "../types/sortingQuery";

const sortModelToSortQuery = (model: SortModel) => {
  const fields = model?.map((item) => item.field);
  const sorts = model?.map((item) => item.sort);

  const sortQuery: SortingQuery = {};

  sortQuery.sort_rows = fields.join(",");
  sortQuery.sorting = sorts.join(",");

  return sortQuery;
};

export default sortModelToSortQuery;
