// utils/processData.js
export const processData = (data, config) => {
  let result = [...data];

  // FILTER
  if (config.filter) {
    const { column, operator, value } = config.filter;

    result = result.filter((item) => {
      const cell = item[column];

      switch (operator) {
        case ">":
          return Number(cell) > value;
        case "<":
          return Number(cell) < value;
        case "=":
          return cell == value;
        default:
          return true;
      }
    });
  }

  // SORT
  if (config.sort) {
    const { column, order } = config.sort;

    result.sort((a, b) => {
      if (a[column] < b[column]) return order === "asc" ? -1 : 1;
      if (a[column] > b[column]) return order === "asc" ? 1 : -1;
      return 0;
    });
  }

  return result;
};